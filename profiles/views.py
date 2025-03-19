
from rest_framework import generics
from .models import Profile
from .serializers import ProfileSerializer
from fork_yeah.permissions import IsOwnerOrReadOnly


class ProfileList(generics.ListCreateAPIView):
    """
    API view for listing and creating profiles.
    """
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    permission_classes = [IsOwnerOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class ProfileDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    Retrieve, update or delete a profile instance.
    """
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    permission_classes = [IsOwnerOrReadOnly]
