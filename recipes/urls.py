from django.urls import path
from .views import (
    RecipeListCreateView,
    RecipeRetrieveUpdateDestroyView,
    IngredientListCreateView,
    RecipeIngredientListCreateView,
    CategoryListView,
    UserRecipesList,
)

urlpatterns = [
    path('ingredients/', IngredientListCreateView.as_view(),
         name='ingredient-list-create'),
    path('recipe-ingredients/', RecipeIngredientListCreateView.as_view(),
         name='recipe-ingredient-list-create'),
    path('recipes/', RecipeListCreateView.as_view(),
         name='recipe-list-create'),
    path('recipes/<int:pk>/', RecipeRetrieveUpdateDestroyView.as_view(),
         name='recipe-detail'),
    path('categories/', CategoryListView.as_view(),
         name='category-list'),
    path('my-recipes/', UserRecipesList.as_view(),
         name='my-recipes'),
]
