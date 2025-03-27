from rest_framework import generics, filters, permissions
from django_filters.rest_framework import DjangoFilterBackend
from .models import Recipe, Ingredient, RecipeIngredient, Category
from .serializers import (
    RecipeSerializer,
    IngredientSerializer,
    RecipeIngredientSerializer,
    CategorySerializer,
)
from fork_yeah.permissions import IsOwnerOrReadOnly


class CategoryListView(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class IngredientListCreateView(generics.ListCreateAPIView):
    """
    View to list and create ingredient names.
    """
    queryset = Ingredient.objects.all()
    serializer_class = IngredientSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    filter_backends = [filters.SearchFilter]
    search_fields = ['name']


class RecipeListCreateView(generics.ListCreateAPIView):
    """
    View to list and create recipes.
    """
    queryset = Recipe.objects.all().filter(
        approved=True).order_by('-created_at')
    serializer_class = RecipeSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_fields = ["category"]
    search_fields = ['title', 'recipe_ingredients__ingredient__name']

    def perform_create(self, serializer):
        """
        Associate the recipe with the currently logged-in user.
        """
        serializer.save(owner=self.request.user)


class RecipeRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    """
    View to retrieve, update, or delete a recipe.
    """
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
    permission_classes = [IsOwnerOrReadOnly]


class RecipeIngredientListCreateView(generics.ListCreateAPIView):
    """
    View to list and create recipe ingredients.
    """
    queryset = RecipeIngredient.objects.all()
    serializer_class = RecipeIngredientSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ["recipe"]
