from rest_framework import serializers
from .models import Ingredient, Recipe, RecipeIngredient, Category


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

        if isinstance(ingredients_data, str):
            raise serializers.ValidationError(
                {"ingredients": "This field must be a list"}
            )

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

