from rest_framework import generics, filters
from .models import Recipe, Ingredient
from .serializers import RecipeSerializer, IngredientSerializer
from fork_yeah.permissions import IsOwnerOrReadOnly
from django_filters.rest_framework import DjangoFilterBackend


class IngredientListCreateView(generics.ListCreateAPIView):
    queryset = Ingredient.objects.all()
    serializer_class = IngredientSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['name']


class RecipeListCreateView(generics.ListCreateAPIView):
    queryset = Recipe.objects.all().order_by('-created_at')
    serializer_class = RecipeSerializer
    permission_classes = [IsOwnerOrReadOnly]
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['ingredients']

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)


class RecipeRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
    permission_classes = [IsOwnerOrReadOnly]
