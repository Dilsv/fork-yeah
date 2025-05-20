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

I have used VSCode with [WSL](https://learn.microsoft.com/en-us/windows/wsl/install) for developement so I'll describe the steps I took.

* Create the repository.
* On VScode connect to WSL.
  * Clone the repository
* Run the command ```npx create-react-app . --use-npm```
* After it has finished run the command ```npm start``` to check if the app is working.
* Git add, commit and push.

#### Add the Heroku deployment commands

In package.json file, in the “scripts” section, add the following prebuild command:

```"heroku-prebuild": "npm install -g serve",```

This will install a package needed to serve our single page application on heroku

Add a Procfile at the root of the project with the following web command:

```web: serve -s build```

#### Connect to the API

Navigate to the Heroku app of the project DRF-API, and under the Settings tab, add the following configvars:

|KEY|VALUE|
|--|--|
|CLIENT_ORIGIN | <https://your-react-app-name.herokuapp.com>*|
|CLIENT_ORIGIN_DEV | <https://gitpod-browser-link.ws-eu54.gitpod.io>*|

*Check that the trailing slash \ at the end of both links has been removed.

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

## Testing
Please see [Testing](TESTING.md)

### Aknowledgments

My mentor [Mo Shami] for guidance, support and feedback during the project.

My fellow Code Institute peer Vasileios Tsimourdagkas for feedback and support during the project. Also for providing an excellent guide how to write the TESTING.md.

And my friends and family for their ongoing support during this project.