from django.db import models
from django.contrib.auth.models import User
from django.core.exceptions import ValidationError


def validate_zero(value):
    """
    Validate that the value is not zero
    """
    if value < 0:
        raise ValidationError(("This field must be a positive number"))


class Category(models.Model):
    Category_CHOICES = [
        ('breakfast', 'Breakfast'),
        ('lunch', 'Lunch'),
        ('dinner', 'Dinner'),
        ('snack', 'Snack'),
        ('dessert', 'Dessert'),
        ('drink', 'Drink'),
        ('other', 'Other'),
    ]

    name = models.CharField(
        max_length=255,
        unique=True,
        choices=Category_CHOICES
    )
    slug = models.SlugField(unique=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = "Categories"


class Ingredient(models.Model):
    name = models.CharField(max_length=255, unique=True)

    def __str__(self):
        return f"{self.name}"


class Recipe(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    instructions = models.TextField()
    image = models.ImageField(
        upload_to="recipes/", default="../recipe-default-image_vkkgno",
        blank=True)
    category = models.ForeignKey(
        Category, on_delete=models.CASCADE, related_name="recipes", default=1)
    owner = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="recipes")
    ingredients = models.ManyToManyField(
        Ingredient, through="RecipeIngredient")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    approved = models.BooleanField(default=False)

    def __str__(self):
        return self.title


class RecipeIngredient(models.Model):
    UNIT_CHOICES = [
        ('g', 'Grams'),
        ('kg', 'Kilograms'),
        ('ml', 'Milliliters'),
        ('l', 'Liters'),
        ('cups', 'Cups'),
        ('tbsp', 'Tablespoons'),
        ('tsp', 'Teaspoons'),
        ('pcs', 'Pieces'),
    ]

    recipe = models.ForeignKey(
        Recipe, on_delete=models.CASCADE, related_name="recipe_ingredients")
    ingredient = models.ForeignKey(Ingredient, on_delete=models.CASCADE)
    quantity = models.FloatField(validators=[validate_zero])
    unit = models.CharField(max_length=50, choices=UNIT_CHOICES, default="g")

    class Meta:
        unique_together = ('recipe', 'ingredient')

    def __str__(self):
        return (
            f"{self.quantity} {self.unit} of {self.ingredient.name} "
            f"in {self.recipe.title}"
        )

    def save(self, *args, **kwargs):
        """
        Ensure that validation runs every time an instance is updated
        or created.
        """
        self.full_clean()  # This triggers all field validators
        super().save(*args, **kwargs)
