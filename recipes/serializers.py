from rest_framework import serializers
from .models import Ingredient, Recipe, RecipeIngredient, Category



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
    # Only display owner's username
    owner = serializers.ReadOnlyField(source="owner.username")
    ingredients = RecipeIngredientSerializer(
        source="recipe_ingredients", many=True,
        required=False,
        read_only=True
    )  # Nested ingredients
    category = serializers.SlugRelatedField(
        slug_field="name", queryset=Category.objects.all())

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
            "approved"
        ]

    def create(self, validated_data):
        ingredients_data = self.context["request"].data.get("ingredients", [])

        print(ingredients_data)
        if isinstance(ingredients_data, str):
            raise serializers.ValidationError(
                {"ingredients": "This field must be a list"}
            )

        # Create and save the Recipe first
        recipe = Recipe.objects.create(**validated_data)

        # Now, add ingredients to the recipe
        for ing in ingredients_data:
            recipe = Recipe.objects.get(id=recipe.id)
            ingredient_id = ing.get("ingredient")
            quantity = ing.get("quantity")
            unit = ing.get("unit")

            try:
                ingredient = Ingredient.objects.get(id=ingredient_id)
                RecipeIngredient.objects.create(
                    recipe=recipe,  # Recipe instance now has an ID
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
        if not isinstance(ingredients_data, list):
            raise serializers.ValidationError(
                {"ingredients": "This field must be a list."})

        # Track existing ingredients to avoid duplicates
        existing_ingredients = {
            ri.ingredient.id: ri for ri in instance.recipe_ingredients.all()}

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
                    recipe_ingredient.save()
                else:
                    # Create new RecipeIngredient with recipe ID
                    RecipeIngredient.objects.create(
                        recipe_id=instance.id,  # Set recipe ID explicitly
                        ingredient=ingredient,
                        quantity=quantity,
                        unit=unit
                    )

            except Ingredient.DoesNotExist:
                raise serializers.ValidationError(
                    {"ingredient": f"Invalid ingredient ID: {ingredient_id}"}
                )

        # Remove RecipeIngredients that are no longer in the update request
        # updated_ingredient_ids = [int(i["ingredient"])
        #                           for i in ingredients_data]
        # instance.recipe_ingredients.exclude(
        #     ingredient_id__in=updated_ingredient_ids).delete()

        return instance
