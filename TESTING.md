# Contents

* [PEP8](#pep8)
* [Manual Testing](#manual-testing)
* [Bugs](#bugs)

## PEP8

During development I had enabled the autopep8 extension to format the files on save.
I also had enabled the Flake8 linter and I had no errors or warnings.

## Manual Testing

| # | Endpoint | Method | Expected outcome | Pass/Fail |
| -- | --- | --- | --- | --- |
| | Recipes | | | |
| 1 | /recipes | GET | A list of all recipes | ✅ |
| 2 | /recipes | POST* | Create a new Recipe | ✅ |
| 3 | /recipes/:id | GET | A recipe with its details | ✅ |
| 4 | /recipes/:id | PUT | Update recipe's details | ✅ |
| 5 | /recipes/:id | DELETE | Delete a recipe | ✅ |
| 6 | /recipes/:id/images/:id | DELETE | Delete a recipe's image | ✅ |
| | Favourites | | | |
| 7 | /favourites | GET | A list of user's (owner) favourite items | ✅ |
| 8 | /favourites | POST | Add a recipe to the user's faviourite's | ✅ |
| 9 | /favourites/:id | DELETE | Delete a recipe from user's favourite's | ✅ |
| | Create Recipe | | | |
| 10 | /create recipe | GET | A create recipe form | ✅ |
| 11 | /create recipe | POST | Create a new recipe | ✅ |
| 12 | /create recipe (Admin only) | GET | A list of all the recipes | ✅ |
| 13 | /create recipe/:id (Admin only) | GET | The created recipe selected | ✅ |
| | Profiles | | | |
| 14 | /profiles | GET | A list of all the profiles | ✅ |
| 15 | /profiles/:id | GET | Profile's details | ✅ |
| 16 | /profiles/:id | PUT | If owner update the profile | ✅ |
| 17 | /profiles/:id | DELETE | If owner delete the profile | ✅ |

*POST method for /Recipes has been tested with Postman as I had to upload multiple images.

[/Recipes POST](/documentation/testing/POST_Recipes.png) \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
___

* [CSS](#css)
* [ESlint](#eslint)
* [Lighthouse](#lighthouse)
* [User Stories](#user-stories)
* [Manual Testing](#manual-testing)
* [Bugs](#bugs)

## CSS

All files has been checked and gave no errors.

![CSS](/documentation/CSS_validation.png)

## ESlint

[ESlint](https://eslint.org/) - Has been used during developement and had no errors.

![ESlint](/documentation/Eslint.png)

In the ContactForm.js and in the useEffect hook dependencies array I had to disable-next-line. If contactData is included in the dependency array,
the useEffect hook will run indefinitely, so I had to remove it.

```javascript
 useEffect(() => {
    if (currentUser) {
      // If the current user exists, fetch the user profile data.
      const fetchProfileData = async () => {
        try {
          const { data } = await axiosReq.get(`/profiles/${id}/`);
          // Set the contactData state with the user's name and email address.
          setContactData({
            ...contactData,
            name: currentUser.username,
            email: data.email_address,
          });
        } catch (err) {
        }
      };
      fetchProfileData();
    }
    // if contactData is included in the dependency array,
    // the useEffect hook will run indefinitely
    // eslint-disable-next-line
  }, [id, history]);

```

## Lighthouse \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

![Lighthouse](/documentation/Lighthouse.png)

Lighthouse testing has been performed on all pages. No significants dropdowns other than the Recipes page
performance that contain large images (user's uploads).

## User Stories

|User story||PASS|
|--|--|--|
|As a new user, I can register an account on the recipe site so that I can save and manage my recipes.| | :heavy_check_mark: |
|As a user, I can use the navigation bar so that I can seamlessly navigate around the recipe site.| | :heavy_check_mark: |
|As a user, I can see visual indicators for recipe status (e.g., marked as "favourite" or "tried") so that I can track my interaction with recipes.| | :heavy_check_mark: |
|As a user, I can favourite and unfavourite recipes so that I can save recipes I want to try later.| | :heavy_check_mark: |
|As a user, I can view a list of my favourite recipes so that I can focus on recipes I want to try or cook.| | :heavy_check_mark: |
|As a user, I can search for recipes by keywords so that I can find specific recipes more easily.| | :heavy_check_mark: |
|As a user, I can delete my recipes so that I can permanently remove recipes I no longer want to keep.| | :heavy_check_mark: |
|As a user, I can edit my recipes so that I can correct mistakes or update ingredients, instructions, or titles.| | :heavy_check_mark: |
|As a user, I can edit or delete my comments on a recipe in case of input errors or changes in feedback.| | :heavy_check_mark: |
|As a user, I can manage my recipes so that I can add, edit, or delete my own recipes as needed.| | :heavy_check_mark: |
|As a user, I can log in to my account so that I can access my saved recipes, favourites, and profile.| | :heavy_check_mark: |
|As a user, I can log out so that other people using the same device cannot access my account.| | :heavy_check_mark: |
|As a user, I can update my profile so that my information stays up to date.| | :heavy_check_mark: |
|As a user, I can add a profile picture so that others can easily recognise me on the site.|| :heavy_check_mark: |
|As a user, I can view the Home Page so that I can understand what the website is about and create an account or log in.| | :heavy_check_mark: |
|As a user, I can browse a list of recipe categories so that I can easily find recipes based on types like "Vegan," "Dessert," "Appetiser," etc.| | :heavy_check_mark: |
|As a user, I can create a recipe so that I can share my cooking experience with others. | | :heavy_check_mark: |
|As the site owner, I would want to validate users' data entries on sign-up so that users can create a login that meets the required standards.| | :heavy_check_mark: |
|As the site owner, I would want to ensure only logged-in users can post recipes, comment, or edit their profile so that data privacy is maintained.| | :heavy_check_mark: |
|As the site owner, I would want the ability to remove recipes and recipe comments so that I can maintain a clean and friendly environment on the site.| | :heavy_check_mark: |
|As the site owner, I would want the site to be fully responsive so that users can access and interact with the website across multiple devices, providing a good user experience.| | :heavy_check_mark: |
|As the site owner, I would want to use the app’s search function so that I can find particular recipes by their title or ingredients.| | :heavy_check_mark: |
|As the site owner, I would want a 404 error page so that users do not have to use the back navigation button if an error occurs.| | :heavy_check_mark: |

## Manual Testing

| # | Feature | Expected Outcome | Testing Performed | Pass/Fail |
| :---: | :--- | :---: | :---: | :---: |
| | Navbar (All users) | | | |
| 1 | Navbar - Home | Redirect to home page | click button | ✅ |
| 3 | Navbar - Recipes | Redirect to recipes page | click button | ✅ |
| 4 | Navbar (Logged out user) | | | |
| 5 | Navbar - Sign in | Redirect to sign in page | click button | ✅ |
| 6 | Navbar - Sign up | Redirect to sign up page | click button | ✅ |
| 7 | Navbar (Logged in user) | | | |
| 8 | Navbar - Favourites | Redirect to favourites page | click button | ✅ |
| 9 | Navbar - Avatar/username | redirect to profile page | click button | ✅ |
| 10 | Navbar - Sign out | Sign out and redirect to home page | click button | ✅ |
| 11 | Navbar (Staff member) | | | |
| 12 | Navbar - Add recipe | redirect to create recipe from page | click button | ✅ |
|  | Sign up Page | | | |
| 13 | All fields filled correctly | Create account and redirect to sign in page | click Sign up button | ✅ |
| 14 | Leave blank username field | Display error: This field may not be blank. | click Sign up button | ✅ |
| 15 | Leave blank password field | Display error: This field may not be blank. | click Sign up button | ✅ |ick Sign up b
| 16 | Leave empty confirm password field | Display error: This field may not be blank. | clutton | ✅ |
| 17 | Set different confirm password | Display error: The two password fields didn't match. | click Sign up button | ✅ |
| 18 | Give username that already exists | Display error: A user with that username already exists. | click Sign up button | ✅ |
| 19 | Sign in Page | | | |
| 20 | All fields filled | Sign in and redirect to previous page | click Sign in button | ✅ |
| 21 | Leave blank username field | Display error: Must include ""username"" and ""password"". | click Sign in button | ✅ |
| 22 | Leave blank password field | Display error: This field may not be blank. | click Sign in button | ✅ |
| 23 | Try username with first letter capital/ all letters capital | Display error: Unable to log in with provided credentials. | click Sign in button | ✅ |
| 24 | Recipe Page | | | |
| 25 | Infinite scroll | Scroll down and populate more recipes | Scrolled down | ✅ |
| 26 | Click on image | Redirect to recipe page | click on image | ✅ |
| 27 | Recipe Page | | | |
| 28 | Display image in modal | Display image in modal | click on an image | ✅ |
| 29 | Recipe Page (logged out) | | | |
| 30 | Add to favourite button | Redirect to sign in page | click button | ✅ |
| | Recipe Page (logged in) | | | |
| 31 | Add to favourites button | Add recipe to wishlist, display message: Added to favourites | click button | ✅ |
| 32 | Remove from favourites button | Remove recipe from favourites, display message: Removed from favourites | click button | ✅ |
| | Recipe Page (logged in staff member) | | | |
| 33 | Display owner, created at, updated at, carret down(dropdown menu) | Display owner, created at, updated at | sign in as admin, navigate to recipe page | ✅ |
| 34 | Display dropdown menu | Display edit and delete icons | click caret down button | ✅ |
| 35 | Dropdown menu edit icon | Redirect to edit recipe page | click edit icon | ✅ |
| 36 | Dropdown menu delete icon | Delete recipe, redirect to recipes page | click delete icon | ✅ |
| | Add recipe (Form errors)* | | | |
| 37 | Blank any field | Display error message: This field may not be blank. | Left blank one of each fields and press create | ✅ |
| 38 | Availability field | Display error: | Left blank availability field and press create | ✅ |
| 39 | ** Fields recipe title, category, description, select ingredient (self populating), create ingredient, recipe quantities are number only fields | Display error message: a valid integer is required | Left blank one of each fields and press create | ✅ |
| 40 | ** Fields quantity are number only fields | Display error message: This field must be a positive number | Typed negative value on one of each fields and press create | ✅ |
| | Edit recipe | | | |
| 41 | Existing images checkbox | Change selected image | Change image and click save changes button | ✅ |
| 42 | Submit button | Button text: Update | Navigate to the edit recipe page | ✅ |
| 43 | * The rest of the fields same as create recipe | | | ✅ |
| | SearchBar | | | |
| 44 | Search | | Search recipe, self populates related recipes | ✅ |
| 45 | Search category| | Search recipe through category, self populates related recipes | ✅ |
| | Profile Page | | | |
| 46 | Profile | If owner, display the profile page | Log in and navigate to profile page | ✅ |
| 47 | Profile | If not owner, do not display the profile page | Log in and navigate to different user's profile page | ✅ |
| 48 | Menu | Display edit profile, change username and change password links | click caret down button | ✅ |
| 49 | Dropdown menu edit profile | Redirect to edit profile page | clickedit profile link | ✅ |
| 50 | Dropdown menu change username | Redirect to change username page | click change username link | ✅ |
| 51 | Dropdown menu change password | Redirect to change password page | click change password link | ✅ |
| | Profile Edit | | | |
| 52 | Form save | Update details | Edit fields, click save | ✅ |
| 53 | Cancel button | Redirect to Profile Page | click cancel | ✅ |
| | Change username | | | |
| 54 | Username field | Update username | | ✅ |
| 55 | Cancel button | Redirect to Profile Page | click cancel | ✅ |
| | Change password | | | |
| 56 | Blank field | Display error message: This field may not be blank. | Left blank one of each fields and press create | ✅ |
| 57 | Different passwords | Display error message: The two password fields didn’t match. | Enter different passwords | ✅ |
| 58 | Password length error | Display error message: The two password is too short. | Enter short password | ✅ |
| 59 | Cancel button | Redirect to Profile Page | click cancel | ✅ |
| | Footer | | | |
| 60 | Facebook icon | Open in new window | Click icon | ✅ |
| 61 | Instagram icon | Open in new window | Click icon | ✅ |
| 62 | Twitter icon | Open in new window | Click icon | ✅ |
| | Restricted Pages 403 | | | |
| 63 | Non staff member can't access the Add Recipe | Display 403 page | Navigated to Add Recipe url as logged out user | ✅ |
| 64 | Non staff member can't access the Add Recipe | Display 403 page | Navigated to Add Recipe url as logged in user | ✅ |
| 65 | Non staff member can't access the Add Recipe | Display Add Recipe Page | Navigated to Add Recipe url as admin user | ✅ |
| 66 | Non staff member can't access the Edit Recipe | Display 403 page | Navigated to Edit Recipe url as logged out user | ✅ |
| 67 | Non staff member can't access the Edit Recipe | Display 403 page | Navigated to Edit Recipe url as logged in user | ✅ |
| 68 | Non staff member can't access the Edit Recipe | Display Edit Recipe Page | Navigated to Edit Recipe url as admin user | ✅ |
| | Not found 404 | | | |
| 69 | 404 not found page | Load 404 if Recipe id doesn't exist | Navigated to a recipe and change the url on the browser, ie. Recipes/1234567 | ✅ |
| 70 | 404 not found page | Load 404 page | Tried various urls that don't exist | ✅ |

## Bugs

### Solved Bugs

BUG: When press add to list button and then remove from list, The button wouldn't change state.

FIX: I had to add in the useEffect array the addedToList variable to be able to change the boolean/statement to True|

___

BUG: When creating or updating recipe and entering a negative value for quantity the error message would not render.
Fix: Update the error code :

 ```javascript
 {errors?.quantity?.map((message, idx) => (
                  <Alert variant="warning" key={idx}>
                    {message}
                  </Alert>
                ))}
                {errors?.unit?.map((message, idx) => (
                  <Alert variant="warning" key={idx}>
                    {message}
                  </Alert>
                ))}
 ```
___
BUG: When updating recipes negative values for quantity, it would not raise the validation error.

FIX: Modify their RecipeSerializer's update() method to catch validation errors and return a 400 response instead of a 500 error: (solution found on ChatGPT)

```python
try:
                ingredient = Ingredient.objects.get(id=ingredient_id)

                if ingredient_id in existing_ingredients:
                    # Update existing RecipeIngredient
                    recipe_ingredient = existing_ingredients[ingredient_id]
                    recipe_ingredient.quantity = quantity
                    recipe_ingredient.unit = unit

                    try:
                        recipe_ingredient.full_clean()  # Validate before saving
                        recipe_ingredient.save()
                    except ValidationError as e:
                        raise DRFValidationError({"quantity": e.messages})
                else:
                    ingredient = Ingredient.objects.get(id=ingredient_id)
                    # Create new RecipeIngredient
                    try:
                        RecipeIngredient.objects.create(
                            recipe_id=instance.id,
                            ingredient=ingredient,
                            quantity=quantity,
                            unit=unit
                        )
                    except ValidationError as e:
                        raise DRFValidationError({"quantity": e.messages})
```

and  then in RecipesPage.js add

```javascript
if (window.localStorage.getItem("edited") === "true") { window.location.reload(); localStorage.removeItem("edited");}
```

___
BUG: It wouldn't get the refresh token, when refresh page would sign out.

FIX: I had to add the missing "defaults" at axiosDefaults.js for

```javascript
axios.defaults.withCredentials = true
```

___
BUG: Upload multiple images

FIX: I had to add had to set Array.from to formdata

```javascript
Array.from(imageInput.current.files).forEach((file) => {
      formData.append("uploaded_images", file);
    });
```

___
BUG: I couldn't deploy the project to Heroku

FIX: Had to set

```javascript
"engines": {

    "node": "16.20.2"

  } 
```

to package.json to be able to deploy the app

BUG: When adding or removing Recipes to the favourites and navigate within 3 seconds to Favourites it would raise the following warning:

```text
Recipe.js:123 Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.
    at Recipe (https://https://fork-yeah-1ed6fe420f34.herokuapp.com//static/js/main.chunk.js:8125:5)
    at RecipePage (https://https://fork-yeah-1ed6fe420f34.herokuapp.com//static/js/main.chunk.js:9934:73)
```

FIX: I added to the useFetchFavourites hook to check if component is mounted and then perform any state update. Solution found at [stackoverflow](https://stackoverflow.com/questions/53949393/cant-perform-a-react-state-update-on-an-unmounted-component)

## Credits

### Code Used

[Code Institute's](https://codeinstitute.net/) - Walkthrough project Moments.

[React docs](https://legacy.reactjs.org/docs/getting-started.html)

[Stackoverflow](https://stackoverflow.com/) - For varius enquries I had.

[stackoverflow](https://stackoverflow.com/questions/53949393/cant-perform-a-react-state-update-on-an-unmounted-component) - To fix warning for unmounted component.

[ChatGPT] (https://openai.com/index/chatgpt/) - For RecipeSerializers.