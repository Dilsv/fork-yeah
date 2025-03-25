from django.contrib import admin
from .models import Recipe, Ingredient, RecipeIngredient, Category

admin.site.register(Recipe)
admin.site.register(Ingredient)
admin.site.register(RecipeIngredient)


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    prepopulated_fields = {"slug": ("name",)}
