from django.urls import path
from .views import RecipeListCreateView, IngredientListCreateView

urlpatterns = [
    path('ingredients/', IngredientListCreateView.as_view(),
         name='ingredient-list-create'),
    path('recipes/', RecipeListCreateView.as_view(),
         name='recipe-list-create'),
]
