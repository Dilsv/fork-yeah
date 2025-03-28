from rest_framework import generics, permissions
from .models import Favourite
from .serializers import FavouriteSerializer
from fork_yeah.permissions import IsOwnerOrReadOnly


class FavouritesList(generics.ListCreateAPIView):
    """
    API view for listing and creating Favourites.
    """
    queryset = Favourite.objects.all()
    serializer_class = FavouriteSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

    def get_queryset(self):
        return Favourite.objects.filter(owner=self.request.user)


class FavouritesDetail(generics.RetrieveDestroyAPIView):
    """
    Retrieve or delete a specific Favourite item.
    """
    queryset = Favourite.objects.all()
    serializer_class = FavouriteSerializer
    permission_classes = [IsOwnerOrReadOnly]
