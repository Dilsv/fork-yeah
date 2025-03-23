from django.contrib.humanize.templatetags.humanize import naturaltime
from dj_rest_auth.serializers import UserDetailsSerializer
from rest_framework import serializers


class CurrentUserSerializer(UserDetailsSerializer):
    profile_id = serializers.ReadOnlyField(source='profile.id')
    profile_image = serializers.ReadOnlyField(source='profile.image.url')
    created_at = serializers.SerializerMethodField()
    updated_at = serializers.SerializerMethodField()


class Meta(UserDetailsSerializer.Meta):
    fields = UserDetailsSerializer.Meta.fields + (
        'profile_id', 'profile_image'
    )
