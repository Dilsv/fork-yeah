from django.urls import path
from .views import (
    RecipeListCreateView,
    RecipeRetrieveUpdateDestroyView,
    IngredientListCreateView
)

urlpatterns = [
    path('ingredients/', IngredientListCreateView.as_view(),
         name='ingredient-list-create'),
    path('recipes/', RecipeListCreateView.as_view(),
         name='recipe-list-create'),
    path('recipes/<int:pk>/', RecipeRetrieveUpdateDestroyView.as_view(),
         name='recipe-detail'),
]
