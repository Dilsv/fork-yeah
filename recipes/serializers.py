from rest_framework import serializers
from .models import Ingredient, Recipe, RecipeIngredient, Category
from django.core.exceptions import ValidationError
from rest_framework.exceptions import ValidationError as DRFValidationError
import json


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ["id", "name"]


class IngredientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ingredient
        fields = ["id", "name"]


class RecipeIngredientSerializer(serializers.ModelSerializer):
    ingredient_name = serializers.CharField(
        source="ingredient.name", read_only=True, required=False
    )

    class Meta:
        model = RecipeIngredient
        fields = [
            "id",
            "recipe",
            "ingredient",
            "ingredient_name",
            "quantity",
            "unit"
        ]


class RecipeSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source="owner.username")
    is_owner = serializers.SerializerMethodField()
    ingredients = RecipeIngredientSerializer(
        source="recipe_ingredients", many=True,
        required=False,
        read_only=True
    )
    category = serializers.SlugRelatedField(
        slug_field="name", queryset=Category.objects.all())
    
    def validate_image(self, value):
        if value.size > 2 * 1024 * 1024:
            raise serializers.ValidationError('Image size larger than 2MB!')
        if value.image.height > 4096:
            raise serializers.ValidationError(
                'Image height larger than 4096px!'
            )
        if value.image.width > 4096:
            raise serializers.ValidationError(
                'Image width larger than 4096px!'
            )
        return value

    def get_is_owner(self, obj):
        request = self.context["request"]
        return obj.owner == request.user

    class Meta:
        model = Recipe
        fields = [
            "id",
            "title",
            "description",
            "instructions",
            "image",
            "category",
            "owner",
            "ingredients",
            "created_at",
            "updated_at",
            "approved",
            "is_owner",
        ]

    def create(self, validated_data):
        ingredients_data = self.context["request"].data.get("ingredients", [])

        if isinstance(ingredients_data, str):  # If it's a string, parse it
            try:
                ingredients_data = json.loads(ingredients_data)
            except json.JSONDecodeError:
                raise serializers.ValidationError(
                    {"ingredients": "Invalid format, must be a list."})

        if not isinstance(ingredients_data, list):
            raise serializers.ValidationError(
                {"ingredients": "This field must be a list."})

        # Create and save the Recipe first
        recipe = Recipe.objects.create(**validated_data)

        # Add ingredients to the recipe
        for ing in ingredients_data:
            recipe = Recipe.objects.get(id=recipe.id)
            ingredient_id = ing.get("ingredient")
            quantity = ing.get("quantity")
            unit = ing.get("unit")

            try:
                ingredient = Ingredient.objects.get(id=ingredient_id)
                RecipeIngredient.objects.create(
                    recipe=recipe,  # Recipe instance ID
                    ingredient=ingredient,
                    quantity=quantity,
                    unit=unit
                )
            except Ingredient.DoesNotExist:
                raise serializers.ValidationError(
                    {"ingredient": f"Invalid ingredient ID: {ingredient_id}"}
                )

        return recipe

    def update(self, instance, validated_data):
        """
        Custom update method to update RecipeIngredients while ensuring
        the recipe ID is included.
        """
        ingredients_data = self.context["request"].data.get("ingredients", [])

        # Update the main Recipe fields
        instance = super().update(instance, validated_data)

        # Validate ingredients input
        if isinstance(ingredients_data, str):
            try:
                ingredients_data = json.loads(ingredients_data)
            except json.JSONDecodeError:
                raise serializers.ValidationError(
                    {"ingredients": "Invalid format, must be a list."})

        if not isinstance(ingredients_data, list):
            raise serializers.ValidationError(
                {"ingredients": "This field must be a list."})

        # Track existing ingredients to avoid duplicates
        existing_ingredients = {
            ri.ingredient.id: ri for ri in instance.recipe_ingredients.all()}

        # Track updated ingredient IDs
        updated_ingredient_ids = set()

        for ing in ingredients_data:
            ingredient_id = ing.get("ingredient")
            quantity = ing.get("quantity")
            unit = ing.get("unit")

            try:
                ingredient = Ingredient.objects.get(id=ingredient_id)

                if ingredient_id in existing_ingredients:
                    # Update existing RecipeIngredient
                    recipe_ingredient = existing_ingredients[ingredient_id]
                    recipe_ingredient.quantity = quantity
                    recipe_ingredient.unit = unit

                    try:
                        recipe_ingredient.full_clean()  # Validate before saving
                        recipe_ingredient.save()
                    except ValidationError as e:
                        raise DRFValidationError({"quantity": e.messages})
                else:
                    ingredient = Ingredient.objects.get(id=ingredient_id)
                    # Create new RecipeIngredient
                    try:
                        RecipeIngredient.objects.create(
                            recipe_id=instance.id,
                            ingredient=ingredient,
                            quantity=quantity,
                            unit=unit
                        )
                    except ValidationError as e:
                        raise DRFValidationError({"quantity": e.messages})

                updated_ingredient_ids.add(ingredient_id)

            except Ingredient.DoesNotExist:
                raise serializers.ValidationError(
                    {"ingredient": f"Invalid ingredient ID: {ingredient_id}"}
                )

        ingredients_to_delete = [
            ri for ing_id, ri in existing_ingredients.items()
            if ing_id not in updated_ingredient_ids
        ]

        for ri in ingredients_to_delete:
            ri.delete()

        return instance
