from django.db import models
from django.contrib.auth.models import User
from recipes.models import Recipe


class Favourite(models.Model):
    owner = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='favourites')
    recipe = models.ForeignKey(
        Recipe, on_delete=models.CASCADE, related_name='favourited_by')
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('owner', 'recipe')
        ordering = ('-owner', '-created_at')

    def __str__(self):
        ordering = ('-owner', '-created_at')
