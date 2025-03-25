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
    # Only display author's username
    author = serializers.ReadOnlyField(source="author.username")
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
            "author",
            "ingredients",
            "created_at",
            "updated_at",
        ]
