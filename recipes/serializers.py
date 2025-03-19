from rest_framework import serializers
from .models import Recipe, Ingredient


class IngredientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ingredient
        fields = ['id', 'name', 'quantity']


class RecipeSerializer(serializers.ModelSerializer):
    author = serializers.ReadOnlyField(
        source='owner.username')  # Read-only field
    ingredients = serializers.PrimaryKeyRelatedField(
        many=True, queryset=Ingredient.objects.all())
    image = serializers.ImageField(required=False)

    class Meta:
        model = Recipe
        fields = [
            'id',
            'title',
            'description',
            'instructions',
            'image',
            'author',
            'ingredients',
            'created_at',
            'updated_at',
        ]
