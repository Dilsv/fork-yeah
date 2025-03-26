from rest_framework import serializers
from .models import Favourite


class FavouriteSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    is_owner = serializers.SerializerMethodField()

    def get_is_owner(self, obj):
        return self.context['request'].user == obj.owner

    class Meta:
        model = Favourite
        fields = [
            'id',
            'recipe',
            'created_at',
            'owner',
            'is_owner'
        ]

    def validate(self, data):
        """
        Checks for duplicate recipes in the user's favourites.
        Checks if owner is the same as the user.
        If it is, it will raise an error.
        If it is not, it will create the favourites object.
        """

        if self.context["request"].user == data["recipe"].owner:
            raise serializers.ValidationError(
                "You cannot add your own recipe")

        if Favourite.objects.filter(
            owner=self.context["request"].user, recipe=data["recipe"]
        ).exists():
            raise serializers.ValidationError(
                "recipe already exists in favourites")
        return data
