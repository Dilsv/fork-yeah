from django.contrib import admin
from .models import Recipe, Ingredient, RecipeIngredient, Category


class RecipeAdmin(admin.ModelAdmin):
    list_display = ('category', 'title', 'updated_at', 'approved')
    list_filter = (
        'title',
        'category',
        'created_at',
        'updated_at',
        'approved')
    search_fields = ('title', 'category__name')

    actions = ['approve_recipes', 'disapprove_recipes']

    def approve_recipes(self, request, queryset):
        queryset.update(approved=True)

    def disapprove_recipes(self, request, queryset):
        queryset.update(approved=False)


class RecipeIngredientInline(admin.ModelAdmin):
    list_display = ('recipe', 'ingredient', 'quantity', 'unit')
    list_filter = ('recipe', 'ingredient', 'quantity', 'unit')


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    prepopulated_fields = {"slug": ("name",)}


admin.site.register(RecipeIngredient, RecipeIngredientInline)
admin.site.register(Recipe, RecipeAdmin)


class IngredientAdmin(admin.ModelAdmin):
    list_display = ('name', 'id')
    search_fields = ('name',)


admin.site.register(Ingredient, IngredientAdmin)
