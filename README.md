# Fork Yeah!

Fork Yeah! is the delicious result of the final project the owner has created at Code Institute, now live as a fully functional recipe website. After refining and merging multiple repositories, the platform is designed to grow and evolve with user engagement at its core. Fork Yeah! makes it easy for food lovers to discover, save, and share their favourite recipes, whether they're looking for quick weekday meals or gourmet creations.

Deployed Heroku: [Fork Yeah! Heroku](https://fork-yeah-1ed6fe420f34.herokuapp.com/)

Github [Repository](https://github.com/Dilsv/fork-yeah)

## Contents

* [Database Diagram](#database-diagram)
* [Design](#design)
  * [Colour Scheme](#colour-scheme)
  * [Typography](#typography)
  * [Wireframes](#wireframes)
* [User Experience (UX)](#user-experience-ux)
  * [Site Purpose](#site-purpose)
  * [Site Goal](#site-goal)
  * [Audience](#audience)
  * [Communication](#communication)
  * [Current User Goals](#current-user-goals)
  * [New User Goals](#new-user-goals)
  * [Future Goals](#future-goals)
* [User Stories](#user-stories)
* [Features](#features)
  * [Navigation Bar](#navigation-bar)
    * [Navigation Bar (Admin)](#navigation-bar-admin-user)
  * [Footer](#footer)
  * [Home Page](#home-page)
  * [Recipes Page](#listings-page)
  * [Recipe Page](#listing-page)
    * [Images modal](#images-modal)
  * [Add Recipe Page](#add-listing-page)
  * [Edit Recipe Page](#edit-listing-page)
  * [Sign in Page](#sign-in-page)
  * [Signup Page](#sign-up-page)
  * [Profile Page](#profile-page)
    * [Edit Profile](#edit-profile-page)
    * [Change username](#change-username-page)
    * [Change password](#change-password-page)
  * [404 error Page](#404-error-page)
* [Responsiveness](#Responsiveness)
* [Future Improvements/Bugs](#Future-Improvements)
* [Reusable Components](#reusable-components)
* [Technologies Used](#technologies-used)
  * [Languages Used](#languages-used)
  * [Frameworks, Libraries & Programs Used](#frameworks-libraries--programs-used)
* [Deployment](#deployment)
* [Testing](#testing)
* [Acknowledgements](#Acknowledgements)

### User Stories

1. User Story 1: As a new user, I can register an account on the recipe site so that I can save and manage my recipes.
2. User Story 2: As a user, I can use the navigation bar so that I can seamlessly navigate around the recipe site.
3. User Story 3: As a user, I can see visual indicators for recipe status (e.g., marked as "favourite" or "tried") so that I can track my interaction with recipes.
4. User Story 4: As a user, I can favourite and unfavourite recipes so that I can save recipes I want to try later.
5. User Story 5: As a user, I can view a list of my favourite recipes so that I can focus on recipes I want to try or cook.
6. User Story 6: As a user, I can search for recipes by keywords so that I can find specific recipes more easily.
7. User Story 7: As a user, I can delete my recipes so that I can permanently remove recipes I no longer want to keep.
8. User Story 8: As a user, I can edit my recipes so that I can correct mistakes or update ingredients, instructions, or titles.
9. User Story 9: As a user, I can view recipe comments so that I can read feedback and additional tips from other users.
10. User Story 10: As a user, I can comment on recipes so that I can interact with other users and share my experience or suggestions.
11. User Story 11: As a user, I can edit or delete my comments on a recipe in case of input errors or changes in feedback.
12. User Story 12: As a user, I can manage my recipes so that I can add, edit, or delete my own recipes as needed.
13. User Story 13: As a user, I can request a password reset so that I can regain access to my account if I forget my password.
14. User Story 14: As a user, I can log in to my account so that I can access my saved recipes, favourites, and profile.
15. User Story 15: As a user, I can log out so that other people using the same device cannot access my account.
16. User Story 16: As a user, I can have a profile page so that I and others can view my saved recipes, favourites, and personal information.
17. User Story 17: As a user, I can update my profile so that my information stays up to date.
18. User Story 18: As a user, I can add a profile picture so that others can easily recognise me on the site.
19. User Story 19: As a user, I can view the Home Page so that I can understand what the website is about and create an account or log in.
20. User Story 20: As a user, I can browse a list of recipe categories so that I can easily find recipes based on types like "Vegan," "Dessert," "Appetiser," etc.
21. User Story 21: As a user, I can create a recipe so that I can share my cooking experience with others. 
22. User Story 22: As a user, I can rate recipes so that I can give feedback on a recipe and help others make informed decisions.
23. User Story 23: As a user, I can filter recipes by ingredients so that I can find recipes based on what I have in my kitchen.
24. User Story 24: As a user, I can receive feedback when submitting a new recipe so that I can confirm the submission was successful.

## Site Owner Stories
1. User Story 1: As the site owner, I would want to validate users' data entries on sign-up so that users can create a login that meets the required standards.
2. User Story 2: As the site owner, I would want to ensure only logged-in users can post recipes, comment, or edit their profile so that data privacy is maintained.
3. User Story 3: As the site owner, I would want the ability to remove recipes and recipe comments so that I can maintain a clean and friendly environment on the site.
4. User Story 4: As the site owner, I would want the site to be fully responsive so that users can access and interact with the website across multiple devices, providing a good user experience.
5. User Story 5: As the site owner, I would want to use the app’s search function so that I can find particular recipes by their title or ingredients.
6. User Story 6: As the site owner, I would want a 404 error page so that users do not have to use the back navigation button if an error occurs.

## Database Diagram

[Database Diagram](/assets/readme.docs/db-diagram.png)

## Design

### Colour Scheme

![Colour pallete](/assets/readme.docs/colours.png)

The colours of the site were chosen to fit the theme of the website. I chose a mix of these bright and dark colours as they show creativity, fun but also visibility.

### Typography

The font [Quicksand](https://fonts.google.com/specimen/Quicksand) and [Boldonse](https://fonts.google.com/specimen/Boldonse)
has been chosen, because of its clean and modern appearance,
its readability and it's a web friendly font.

### Wireframes

#### Desktop

[Home Page](/assets/readme.docs/wireframes/landing-page.png)

[Sign in Page](/assets/readme.docs/wireframes/login-page.png)

[Sign Up Page](/assets/readme.docs/wireframes/signup-page.png)

[Recipes Page](/assets/readme.docs/wireframes/recipes-page.png)

[Instructions Page](/assets/readme.docs/wireframes/instructions-page.png)

[Favourites Page](/assets/readme.docs/wireframes/favourites-page.png)

[Create Recipes Page](/assets/readme.docs/wireframes/create-recipes.png/)

#### Mobile

[Home Page](/assets/readme.docs/wireframes/home-mob.png)

[Sign In Page](/assets/readme.docs/wireframes/sigin-mob.png)

[Sign Up Page](/assets/readme.docs/wireframes/signup-mob.png)

[Recipes Page](/assets/readme.docs/wireframes/recipes-mob.png)

[Instructions Page](/assets/readme.docs/wireframes/instructions-mob.png)

[Favourites Page](/assets/readme.docs/wireframes/favourites-mob.png)

[Create Recipes Page](/assets/readme.docs/wireframes/create-mob.png)

## User Experience (UX)

### Site Purpose

The primary purpose of Fork Yeah! is to provide a comprehensive and user-friendly online platform for individuals seeking to try new recipes. Whether users are looking for a new recipe, familiar recipe, or existing recipe, the site aims to facilitate a seamless and efficient search experience.

### Site Goal

Fork Yeah! strives to become a go-to destination for recipe exploration, connecting users with delicious and inspiring dishes. The overarching goal is to establish a reliable and engaging platform that not only meets current user needs but also anticipates and adapts to evolving food trends.

### Audience

- People who would like to explore new recipes.
- People who would like to share their own experiences with their food creations.
- People who are looking for regular meals they enjoy to make more than once.

### Communication

The site communicates recipes, features, and functionalities clearly and concisely to users. Through an intuitive interface, Fork Yeah! aims to convey information effectively, ensuring a positive and engaging user experience. Regular updates and notifications contribute to ongoing interaction with users.

### Current User Goals

Existing users on Fork Yeah! aspire to efficiently search and find recipes that align with their desires. Clear communication channels, such as the instruction and description sections facilitate inquiries.

### New User Goals

New users are expected to explore the site with ease, understanding its features and functionalities. Their primary goals include discovering available recipes and initiating creating recipes through the Sign Up form.

### Future Goals

Fork Yeah!’s future goals include expanding its user base by potentially allowing users to register and comment and react on recipes. The site aims to enhance its functionality to accommodate a broader range of recipes for ever changing cuisine fusions. Continued improvements in user experience and feature development are key aspects of the platform's ongoing evolution.

## Features

* [Favicon](/frontend/public/favicon.png)

All pages on the site are responsive and have :

* ### Navigation Bar

Site user [navbar](/assets/readme.docs/features/Navbar.png/) contains the logo (acts as home button), Home, Recipes, Sign in, Sign Up. Once user is signed in, they will also be able to view Create Recipe and Favourite's sections.
[SignedIn] (/assets/readme.docs/features/NavbarSignin.png/).

* #### Navigation Bar (Admin user)

Admin user [navbar](/assets/readme.docs/features/AdminNavbar.png) contains the logged in icons plus the Add recipe. 

* ### Footer

The [Footer](/assets/readme.docs/features/Footer.png) displays links for the social media links - Facebook, Instagram and Linkedin icons.
___

### Home Page

The [Home Page](/assets/readme.docs/features/Home_Page.png) contains some headers and paragraphs, the navbar and footer with social media links.

### Recipes Page

[Recipes Page](/assets/readme.docs/features/Recipes_page.png) displays a list of recipes created and uploaded by registered users. The recipes are in an infinite scroll format.
### Sign In Page

The [Sign In Page](/assets/readme.docs/features/Signin_page.png) displays a Sign In form.

### Sign Up Page

The [Sign Up](/assets/readme.docs/features/Signup_page.png) displays the Sign Up form.

### Create Recipe Page

  The [Create Recipe Page](/assets/readme.docs/features/Createrecipe_page.png) displays the form of which the user has to fill in to create their desired recipe. It has a title input bar, category dropdown, description, search ingredient bar which self populates as the user types in ingredients, create ingredient bar of which the user can add into the ingredient list, the quantity and measuring drop downs and input bars, upload image section, and finally create recipe button.
  
### Favourites

[Favourites](/assets/readme.docs/features/Favourites_page.png) displays all the favourite recipes the user has marked as a favourite. The viewer can see the list of favourited recipes with their details and there is a remove from favourites button should the user no longer want it.

### Profile Page

The [Profile Page](/assets/readme.docs/features/Profile_page.png) displays the user's details and a drop down to edit profile, change password or change username options.

#### Edit Profile Page

The [Edit Profile](/assets/readme.docs/features/Profile_edit.png) displays a form to update the image and their username.

#### Change Username Page

The [Change username Page](/assets/readme.docs/features/Change_username.png) displays a form to update the username.

#### Change Password Page

The [Change password Page](/assets/readme.docs/features/Change_password.png) displays a form with 2 fields (new password and confirm password).

### 404 error page

The [404 page](/assets/readme.docs/features/Error_page.png) displays an image with a text error 404: Not found.

## Responsiveness

The application has been tested for responsiveness on iPhone Pro Max, Windows computer, Samsung 34' desktop screen.

## Future Improvements/Bugs
During the build of the website, the developer had faced tight time constraints. The areas they would go back and adjust is:
- More UX design added for better user experience, such as stablised footer on screen and Navbar toggle colour.
- Image Validator for a quicker response time of page uploads. 
- Detailed landing page, with links to recipes.
- Engagement between users through liking, commenting and reacting on posts.
- Spinner continously spinning in Favourites page; the improvement would be to stop that once it has generated all the users favourites.
- The developer had realised that the cloudinary link wasn't reflecting each other in Heroku and env.py file, the developer has corrected this upon receiving initial feedback from assessors.

## Corrections post assessor feedback
The developer has taken into account the feedback from assessors after initial submission. The areas that have been corrected are:
- Added deployment instructions
- Corrected Heroku links
- Rectified broken image links
- Colour correction on hamburger menu to enhance visability. Added the following code to ensure dropdown menu was styled correctly:
      .navbar-toggler {
      background-color: aliceblue;
      border: 0cap;
    }

## Reusable Components

RecipesPageComponent.js: displays more recipes from API and paginated recipe data.

EditRecipesForm.js: displays categories using the fetch hook.

axiosDefault.js: for ease of communication with the backend API.

Asset.js: to supply the loading spinner & user avatar throughout the site.

CurrentUserContext.js: confirm users logged-in status to determine what functionality is available to that user.

useRedirect.js: redirects a user to another page if they are not authorised to be on the page they are trying to access.

utils.js: supplies functionality to all of the components that utilise the Infinite Scroll.

useFetchCategories.js: to fetch categories from the API.

useFetchFavourites.js: to fetch user's favourites from the API.

CreateRecipeForm.js: to fetch ingredients from the API.

UserRecipes.js: fetches query and category.

## Technologies Used

### Languages Used

Python, Javascript, CSS, HTML

### Frameworks, Libraries & Programs Used

* Databases Used
  * [PostgreSQL](https://codeinstitute.net)

#### Frameworks Used

* [Django Project](https://www.djangoproject.com/) - A framework to build the app.
* [Django REST Framework](https://www.django-rest-framework.org/) - A powerful and flexible toolkit for building Web APIs

#### Libraries Used

* [Gunicorn](https://gunicorn.org/) - As the server for Heroku.
* [Dj_database_url](https://pypi.org/project/dj-database-url/) - To parse the database URL from the environment variables in Heroku.
* [Psycopg2](https://pypi.org/project/psycopg2/) - As an adaptor for Python and PostgreSQL databases.
* [Allauth](https://docs.allauth.org/en/latest/installation.html) - For authentication, registration, account management.
* [Cloudinary](https://cloudinary.com/) - To host images
* [Pillow](https://pypi.org/project/pillow/) - Image Processing
* [Whitenoise](https://whitenoise.readthedocs.io/en/latest/index.html) - To serve staticfiles
* [django-filter](https://django-filter.readthedocs.io/en/latest/guide/rest_framework.html#adding-a-filterset-with-filterset-class) - To create range filters
* [django-cors-headers](https://pypi.org/project/django-cors-headers/) - To allow in-browser requests to Django application from other origins.
* [django-phonenumber-field](https://django-phonenumber-field.readthedocs.io/en/latest/) - To validate and convert phone numbers.
* [djangorestframework-simplejwt](https://django-rest-framework-simplejwt.readthedocs.io/en/latest/) -provides a JSON Web Token authentication backend for the Django REST Framework.
HTML, CSS, JS

#### Front End

* [React](https://legacy.reactjs.org/docs/getting-started.html) Javascript library for building the component based UI and avoiding having to refresh to display dynamic content
* [ESLint](https://eslint.org/) Linter for error checking and syntax analysis
* [React Bootstrap](https://react-bootstrap-v4.netlify.app/) CSS framework for styled components
* [Axios](https://axios-http.com/) Promise based http client for making http requests to the backend API
* [React Infinite Scroll](https://www.npmjs.com/package/react-infinite-scroll-component) Used to easily load extra content rather than paginating pages, for a better UX
* [React Router](https://v5.reactrouter.com/web/guides/quick-start) Used to dynamically load pages and aid site navigation for the user.
* [jwt-decode](https://www.npmjs.com/package/jwt-decode) A browser library that helps decoding JWT's token
* [Cloudinary](https://cloudinary.com/) - To host images
* [React cookie consent](https://www.npmjs.com/package/react-cookie-consent)- To get user's consent to load google maps

#### Programs Used

* [GitHub](https://github.com/) - To save and store files for the website.
* [VSCode](https://code.visualstudio.com/) - Code editor used for local development.
* [DBdiagram](/https://dbdiagram.io/home) - To create database diagrams.
* [TinyPNG](https://tinypng.com/) - To reduce size of the images.
* [Shields IO](https://shields.io/) - To add badges to README.
* [Obsidian](https://code.visualstudio.com/) - To keep notes.
* [Balsamiq](https://balsamiq.com/) - Used to create wireframes.
* [Techsini](https://techsini.com/multi-mockup/index.php) - To display the web image in various devices.
* [Google Developer Tools](https://developer.chrome.com/docs/) - To test features, resposiveness and styling.
* [Favicon](https://favicon.io/) - To create favicon.
* [Coolors](https://coolors.co/) - To create palette image to README.

## Deployment and Local Development

### Local Development

When in development:
run first ```nvn use 16.20.2``` to use this version of Node
run ```npm start``` to start the app

#### How to fork

To fork the repository :

1. Log in (sign up) to GitHub.
2. Go to the repository for this project [fork-yeah](https://github.com/Dilsv/fork-yeah)
3. Click the fork button in the top right corner.

#### How to clone

To clone the repository :

1. Log in (sign up) to GitHub.
2. Go to the repository for this project [fork-yeah](https://github.com/Dilsv/fork-yeah)
3. Click on the code button, select one of the HTTPS, SSH or GitHub CLI and copy the link shown.
4. Open the terminal in your code editor and change the current working directory to the location you want to use for the cloned directory.
5. Type 'git clone' into the terminal and then paste the link you copied in step 3. Press enter.

### Deployment

The site has been deployed using Heroku. Deployed site [Fork Yeah!](https://fork-yeah-1ed6fe420f34.herokuapp.com/). Follow these steps:

* Create the repository.
* On VScode connect to WSL.
  * Clone the repository

  #### ElephantSQL

If you don't already have an account to ElephantSQL, create one [here](https://www.elephantsql.com).

* Create an external database with Code Institute or external database

  * Log into Code Institute or external database platform [Code-Institute](https://dbs.ci-dbs.net/)
  * Click "Create New Instance" (if external is being used) or input your email on the CI site
  * Set up a plan by giving a Name and selecting a Plan / Create database
  * Click "Select Region" and choose a Data center
  * Click "Review", check all details and click "Create Instance"
  * Return to the Dashboard and click on the database instance name / receive your link via email provided
  * Copy the database URL

* Create a new repository
* Clone the repository from VSCode
* In VSC open the terminal and install the following using the ```pip install``` command.

```text
'django<4'
django-cloudinary-storage==0.3.0
Pillow==8.2.0
djangorestframework
django-filter
dj-rest-auth
'dj-rest-auth[with_social]'
djangorestframework-simplejwt
dj_database_url psycopg2
gunicorn
django-cors-headers
```

* Create a Django project

```text
django-admin startproject project_name .
```

#### Heroku App

If you don't already have an account to Heroku, create one [here](https://www.heroku.com/).

* Create Heroku app
  * Go to the Heroku dashboard and click the "Create new app" button.
  * Name the app. Each app name on Heroku has to be unique.
  * Then select your region.
  * And then click "Create app".

* In the IDE file explorer or terminal
  * Create new env.py file on top level directory

* In env.py
  * Import os library
  * Set environment variables
  * Add database url
  * Add in secret key

```python
import os

os.environ['DEV'] = '1'
os.environ["DATABASE_URL"] = "Paste in ElephantSQL database URL"    
os.environ["SECRET_KEY"] = "Make up your own randomSecretKey"    
os.environ["CLOUDINARY_URL"] = "Paste in the API Environment variable"
```
  
If you don't already have an account to Cloudinary, create one [here](https://cloudinary.com/).

* Cloudinary
  * Go to the Cloudinary dashboard and copy the API Environment variable.
  * Paste in env.py variable CLOUDINARY_URL(see above)

* In settings.py and to the INSTALLED_APPS add :

```python
'cloudinary_storage',
'django.contrib.staticfiles',
'cloudinary',
'rest_framework',
'django_filters',
'rest_framework.authtoken',
'dj_rest_auth',
'django.contrib.sites',
'allauth',
'allauth.account',
'allauth.socialaccount',
'dj_rest_auth.registration',
'corsheaders',
```

* Import the database, the regular expression module & the env.py

```python
import dj_database_url
import re
import os
if os.path.exists('env.py')
    import env
Below the import statements, add the following variable for Cloudinary:
CLOUDINARY_STORAGE = {
    'CLOUDINARY_URL': os.environ.ger('CLOUDINARY_URL')
}

MEDIA_URL = '/media/'
DEFAULT_FILE_STORAGE = 'cloudinary_storage.storage.MediaCloudinartStorage'
```

* Below INSTALLED_APPS, set site ID:

```python
SITE_ID = 1
```

* Below BASE_DIR, create the REST_FRAMEWORK, and include page pagination to improve app loading times, pagination count, and date/time format:

```python
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [(
        'rest_framework.authentication.SessionAuthentication'
        if 'DEV' in os.environ
        else 'dj_rest_auth.jwt_auth.JWTCookieAuthentication'
    )],
    'DEFAULT_PAGINATION_CLASS':
        'rest_framework.pagination.PageNumberPagination',
    'PAGE_SIZE': 10,
    'DATETIME_FORMAT': '%d %b %Y',
}
```

* Set the default renderer to JSON:

```python
if 'DEV' not in os.environ:
    REST_FRAMEWORK['DEFAULT_RENDERER_CLASSES'] = [
        'rest_framework.renderers.JSONRenderer',
    ]
```

* Beneath that, add the following:

```python
REST_USE_JWT = True
JWT_AUTH_SECURE = True
JWT_AUTH_COOKIE = 'fork-yeah-auth'
JWT_AUTH_REFRESH_COOKIE = 'fork-yeah-refresh-token'
JWT_AUTH_SAMESITE = 'None'
```

* Then add:

```python
REST_AUTH_SERIALIZERS = {
    'USER_DETAILS_SERIALIZER': 'project_name.serializers.CurrentUserSerializer'
}
```

* Update DEBUG variable to:

```python
DEBUG = 'DEV' in os.environ
```

* Update the DATABASES variable to:

```python
DATABASES = {
    'default': ({
       'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    } if 'DEV' in os.environ else dj_database_url.parse(
        os.environ.get('DATABASE_URL')
    )
    )
}
```

* Add the Heroku app to the ALLOWED_HOSTS variable:

```python
os.environ.get('ALLOWED_HOST'),
'localhost',
```

Final requirements:

* Create a Procfile, & add the following two lines:

```text
release: python manage.py makemigrations && python manage.py migrate
web: gunicorn project_name.wsgi
```

* Migrate the database:

```text
python3 manage.py makemigrations
python3 manage.py migrate
```

* Freeze requirements:

```text
pip3 freeze --local > requirements.txt
```

* In heroku app
  * Go to the settings tab.
  * In the settings click the button "Reveal Config Vars".
  * Click Add and use

    |KEY|VALUE|
    |--|--|
    |DATABASE_URL|Paste in ElephantSQL database URL|
    |SECRET_KEY|Your own randomSecretKey|
    |CLOUDINARY_URL|Paste in the API Environment variable|
    |ALLOWED HOST|api-app-name.herokuapp.com|

#### Heroku App

If you don't already have an account to Heroku, create one [here](https://www.heroku.com/).

* Create Heroku app
  * Go to the Heroku dashboard and click the "Create new app" button.
  * Name the app. Each app name on Heroku has to be unique.
  * Then select your region.
  * And then click "Create app".

* In heroku app
  * Go to the deploy tab.
  * Choose the deployment method.
  * Select Github, and confirm to connect to Github.
  * Search for the Github repository name.
  * Then click "connect".
  * Scroll down and click "Deploy Branch".

#### Create React app

The benefits of this include:
- CORS will no longer be an issue as requests and responses will come from a shared base URL, both in your development and production environments.
- You will be able to see the terminal logs for your API while interacting with the React side of your project in development, making debugging significantly easier.
- You will be able to work on the development versions of both the API and the React project simultaneously.
- With the front and back end applications on the same domain, Cookies (containing the JSONWebToken) required for authentication will not be blocked from being set on browsers that currently have cross-site tracking protection enabled by default. This change will allow authentication and authorisation to run in these browsers without errors
- When you have finished these steps, you will have a working development environment, built on the existing workspace for your DRF API, which will include a folder containing your starting React code. You will be able to run both sections of this project in separate terminals.
- There are further steps for combining the two projects under one terminal for final deployment, these are in a separate document.

These steps will show you how to set up a new React application inside the workspace and repository for your DRF project.
1. Open the workspace for your DRF project
2. Open the terminal window and create a new folder called frontend in the root directory

mkdir frontend
3. Change directory to be inside the frontend folder with the following command

cd frontend
4. Make sure that Node.js v16 is installed and selected on your machine.
5. From inside the frontend directory, run the following command to create a new React app and install all the working dependencies used in the Moments application

npx create-react-app . --template git+https://github.com/Code-Institute-Org/cra-template-moments.git --use-npm
6. Enter y to confirm and then click enter
7. Wait for all dependencies to be installed. This installation will take some time, the terminal may appear to freeze for a few minutes. Once it does start to show activity you can ignore any deprecated warnings, these are extremely common and expected with npm installs. The developer needs to make sure to verify that you are in the frontend directory by using the pwd command. Running the next step from your workspace in the wrong working directory is dangerous.
8. Enter the following command to remove the .git folder, .gitignore file and README.md from the frontend folder as these already exist within the root directory of your DRF project

If you are using PowerShell as your VS Code terminal shell:

rm ".git", ".gitignore", "README.md" -Recurse -Force

Otherwise:

rm -rf .git .gitignore README.md
9. When you have completed these steps, your file structure should have a frontend folder including node modules, src, public, package-lock.json and package.json.
10. From inside the frontend directory, run the following command to check that the basic React app is running

npm start
11. Once the npm build finishes successfully, the React app should open automatically in the browser. If the app doesn’t open automatically, you can open it by pressing and holding CTRL (Windows) or CMD (MacOS) and clicking on the localhost URL displayed in the terminal
12. Stop the running application with CTRL-C in the terminal for a Windows machine, or CMD-C on a Mac
13. Move back to the root directory of your project with the following command

cd ..
14. Inside the frontend folder, the node_modules folder will contain all the React dependencies that you will install during the development of your React app. By the end of your project, the folder will contain a huge number of dependencies and sub-dependencies, so you don’t want it tracked by Git nor pushed to GitHub.

Open the .gitignore file in the root of your project, and add the node_modules folder to it, prepended by ** to make sure the folder is ignored regardless of which folder or subfolder it is located in.

**node_modules/

At this stage, ensure that the initial commit takes place.

### Determining your local development environment URL
To determine what your development environment URL is for the subsequent steps, run the server with python3 manage.py runserver and check the URL output in the terminal next to “Starting development server at”.
Stop the server (CTRL+C on Windows or CMD+C on MacOS) when done.

### Preparing your Environment Variables
In your env.py file, make the following changes
1. Comment out the DEV environment variable. This ensures that the application will respond with JSON
2. Remove the CLIENT_ORIGIN_DEV environment variable, if you have it
3. Add a new key DEBUG with a value of ‘1’

This will allow you to see Django's logs in the terminal while keeping your JSON responses and will give you a clearer view of errors for debugging across the two parts of the project.

4. Add a new key ALLOWED_HOST with the value of your development environment URL, wrapped in quotes

Ensure you remove the http:// from the beginning, and the trailing slash / from the end of the development environment URL.

5. Ensure you have a key for DATABASE_URL set to the value of your PostgreSQL from Code Institute database URL

6. Ensure you have a key for CLOUDINARY_URL set to the value of your Cloudinary URL

### Installing urllib3
Open your requirements.txt file and check whether it contains the urllib3 dependency. If it does, you can skip this part. If it does not, please proceed.
urllib3 is installed automatically with more recent versions of Cloudinary, however if you're using an older version of Cloudinary, urllib3 may not have come with it, so you need to install it manually.

1. Ensure your terminal location is in the root directory, then install urllib3 with the following command

pip3 install urllib3==1.26.15

2. Add this dependency to your requirements.txt file with the following command

pip3 freeze > requirements.txt

### Revert psycopg2-binary to psycopg2
This part only applies if you had to install urllib3 and update requirements.txt in the previous step. If not, please skip this part and proceed to the next section of this guide.

In requirements.txt, locate the line with the dependency psycopg2-binary.
psycopg2-binary==2.x.x

In the line, manually delete the -binary part, leaving the rest (including the version number) unchanged, like this:
psycopg2==2.x.x

Remember to save the file.

In settings.py file:
1. Set DEBUG to the value of the DEBUG environment variable and update ALLOWED_HOSTS to include the ALLOWED_HOST environment variable added to your env.py file

Our unified workspace will now serve both the API and the React app, running on separate ports. As a result, in order for both apps to communicate successfully with each other while running on different ports, we will add a proxy to the React application’s package.json. This allows the React app to “pretend” it is making requests from the same port as the server and removes cross-domain issues.

# package.json
Open the package.json file in the frontend directory, and at the bottom of the file, add a new key to the JSON object

"proxy": "http://localhost:8000/"

Your code is now set up so that you can follow along with what you learned in the Moments walkthrough. There is one final difference between the Moments walkthrough setup and what you will need for this combined workspace. That is you will not need the BaseURL setting in the axiosDefaults.js file when it is created. This is because the combined workspace will receive the JSON from the API from the same URL, just on a different port (which was set with the proxy above).

So, to ensure you don’t forget this, let’s create the empty axiosDefaults.js file now and leave a comment as a reminder.

# axiosDefaults.js
1. From the root directory of your project, cd into the src folder with the following command

cd frontend/src

2. From inside the src folder, create a new directory called api with the following command

mkdir api

3. Change directory into your new api folder

cd api

4. From inside the api folder, create a new file called axiosDefaults.js with the following command

touch axiosDefaults.js

5. Move back to the root folder with the following command

cd ../../../

6. Open the axiosDefaults.js file from the file explorer, and add the following comment to it

 // IMPORTANT!!
 // Because this React app is running in the same workspace as the API,

 // there is no need to set a separate baseURL until you reach deployment.

 // Setting a baseURL before you reach deployment will cause errors
This would be a good point to commit your changes again.

# Running the Application
1. Open two terminals, side by side
2. Terminal 1 should be in the root directory where the Django API will run. From here, type the command to run the Django API

python3 manage.py runserver

During development, in order for your React project to access your development API, the Django server must be running, so ensure to run this first before terminal 2.
3. Terminal 2 should be in the frontend directory. To enter that directory from the root, type the following command

cd frontend

Then run the React server with the following command:

npm start

Whenever you want to run your React code, ensure that you have cd-ed into the frontend directory before running the npm start command, and that the Django server is already running the API.

4. Wait for the npm build to complete, this can take a few minutes when running it for the first time in a recently opened workspace
5. The Django API will run on Port 8000, and the React application will run on Port 8080, or Port 3000 depending on which IDE you are using
6. Once the npm build finishes successfully, the React app should open automatically in the browser. If the app doesn’t open automatically, you can open it by pressing and holding CTRL (Windows) or CMD (MacOS) and clicking on the localhost URL displayed in the React terminal (Terminal 2).
7. Ensure you have saved, committed and pushed all of your code to GitHub

#### Add the Heroku deployment commands

In package.json file, in the “scripts” section, add the following prebuild command:

```"heroku-prebuild": "npm install -g serve",```

This will install a package needed to serve our single page application on heroku

Add a Procfile at the root of the project with the following web command:

```web: serve -s build```

*Check that the trailing slash \ at the end of both links has been removed.

### Adding Routes
In the urls.py file of your Django Rest Framework application:
1. Remove the root_route view from the .views imports
2. Import the TemplateView from the generic Django views

 from django.views.generic import TemplateView
3. In the url_patterns list, remove the root_route code and replace it with the TemplateView pointing to the index.html file

 path('', TemplateView.as_view(template_name='index.html')),
4. At the bottom of the file, add the 404 handler to allow React to handle 404 errors
 handler404 = TemplateView.as_view(template_name='index.html')
5. Add api/ to the beginning of all the API URLs, excluding the path for the home page and admin panel

In axiosDefault.js:

1. Now that we have changed the base path for the API route, we need to prepend all API requests in our react application with /api. Open the axiosDefaults.js file, comment back in the axios.defaults.baseURL and set it to "/api"
2. Ensure to commit changes made so far

Compiling the static files:
1. Collect the admin and DRF staticfiles to the empty staticfiles directory you created earlier, with the following command in the terminal

 python3 manage.py collectstatic
2. Next, we will compile the React application and move its files to the staticfiles folder. In another terminal, cd into the frontend directory

 cd frontend
3. Make sure that Node.js v16 is installed and selected on your machine.
4. Then run the command(s) to compile and move the React files

If you are using VS Code Terminal:
npm run build && mv build ../staticfiles/.

You will need to re-run this command any time you want to deploy changes to the static files in your project, including the React code. To do this, you need to delete the existing build folder and rebuild it.

To delete the old folder and replace it with the new one:

If you are using PowerShell, run these commands in sequence, waiting for each one to finish before you run the next one:

npm run build

rm "../staticfiles/build" -Recurse -Force

mv build ../staticfiles/.


Otherwise, run the single command:

npm run build && rm -rf ../staticfiles/build && mv build ../staticfiles/.
5. Now your staticfiles folder should be filled with all the static files needed for deployment. These could be as follows/ It may differ based on the dependancy version being used:
  - staticfiles
    - admin
    - build
    - html
    - js
    - rest_framework

Adding runtime.txt file:
1. This will ensure Heroku uses the correct version of Python to deploy your project.

In the root directory of your project, create a new file named runtime.txt

Inside the runtime.txt, add the following line:

python-3.12.8
2. Reverting psycopg2-binary to psycopg2

There is an updated requirements.txt with pip freeze in a previous step and this will have restored psycopg2-binary (that we have installed in our workspace for development) to the file. However, psycopg2-binary will not work well in the deployed app, so we need to revert to the production-grade psycopg2 before we do the final push to GitHub for deployment in the next section.

In requirements.txt, locate the line with the dependency psycopg2-binary.

psycopg2-binary==2.x.x
In the line, manually delete the -binary part, leaving the rest (including the version number) unchanged, like this:

psycopg2==2.x.x
Remember to save the file.
3. Testing the build:
Now that all the settings are in place, we can test that the builds for both parts of the project are running together on the same server port.

  1. Ensure all running servers are terminated. In any running terminals press Ctrl+C

  2. In your env.py file, ensure that both the DEBUG and DEV environment variables are commented out

  3. Run the Django server, in the terminal type

      python3 manage.py runserver
  4. To check that your application is running, open it in the browser with CTRL+click (Windows) or CMD+click (MacOS) on the localhost URL in the terminal.
     The React server should not be running. This is a test to check that Django is serving the React static files.
     With that done, make sure to commit and push your changes. You are now ready to deploy the project to Heroku.

# Preparing for Deployment
If you have not deployed this application to Heroku before, you can find most of the steps for this in the Deployment section of the Django REST Framework module. Please ensure that you have added those settings, plus the additional ones below.

1. Log into your Heroku account and access the dashboard for your DRF application
2. Go to Settings and open the Config Vars
3. Ensure your application has an ALLOWED_HOST key, set to the URL of your combined project, remove the https:// at the beginning and remove the trailing slash at the end
4. Ensure your application has a CLIENT_ORIGIN key and set it to the URL of your combined project. This time keep the https:// at the beginning but remove the trailing slash at the end
5. If your application still has a CLIENT_ORIGIN_DEV key set, delete the variable by clicking on the “X” icon next to it.
6. Ensure all your settings are in place, including the ones from the Deployment section of the Django REST Framework module. Including saving, committing and pushing any changes made to your code
7. Deploy your application from the Deploy tab in your Heroku dashboard

Deleting the Heroku Postgres add-on:
Heroku automatically attaches this add-on only upon the first deployment of a Django app. If you then delete the add-on, Heroku won't reattach it on any subsequent deployment. Therefore the steps below apply to you only if you are deploying this app for the very first time. Otherwise, you can ignore this section.

Due to a Heroku automation, Heroku automatically assigns you a paid-for Postgres database add-on despite the fact that you are not using their database service for your application. To prevent getting charged for this add-on, you can remove it with the following steps.

1. In your Heroku app dashboard, click the Resources tab.
2. Next to Heroku Postgres, click the chevron button on the far right.
3. Select Delete Add-on.
4. Type in your app name, then click Remove add-on.

Full deployment pulishd on the Code Institute course site.

## Testing
Please see [Testing](TESTING.md)

### Aknowledgements

My mentor [Mo Shami] for guidance, support and feedback during the project.

My fellow Code Institute peer Vasileios Tsimourdagkas for feedback and support during the project. Also for providing an excellent guide how to write the TESTING.md.

And my friends and family for their ongoing support during this project.