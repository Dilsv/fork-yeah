# Fork Yeah!

Fork Yeah! is the delicious result of the final project the owner has created at Code Institute, now live as a fully functional recipe website. After refining and merging multiple repositories, the platform is designed to grow and evolve with user engagement at its core. Fork Yeah! makes it easy for food lovers to discover, save, and share their favourite recipes, whether they're looking for quick weekday meals or gourmet creations.

Deployed Heroku: [Fork Yeah! Heroku]()

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
  * [About Page](#about-page)
  * [Services Pages](#services-pages)
  * [Contact us Page](#contact-page)
  * [Listings Page](#listings-page)
  * [Listing Page](#listing-page)
    * [Images modal](#images-modal)
  * [Add Listing Page](#add-listing-page)
  * [Edit Listing Page](#edit-listing-page)
  * [Messages Page](#messages-page)
    * [Message Page](#message-page)
  * [Sign in Page](#sign-in-page)
  * [Signup Page](#sign-up-page)
  * [Profile Page](#profile-page)
    * [Edit Profile](#edit-profile-page)
    * [Change username](#change-username-page)
    * [Change password](#change-password-page)
  * [403 error Page](#403-error-page)
  * [404 error Page](#404-error-page)
* [Reusable Components](#reusable-components)
* [Technologies Used](#technologies-used)
  * [Languages Used](#languages-used)
  * [Frameworks, Libraries & Programs Used](#frameworks-libraries--programs-used)
* [Testing](#testing)

### User Stories

User Story 1: As a new user, I can register an account on the recipe site so that I can save and manage my recipes.
User Story 2: As a user, I can use the navigation bar so that I can seamlessly navigate around the recipe site.
User Story 3: As a user, I can see visual indicators for recipe status (e.g., marked as "favourite" or "tried") so that I can track my interaction with recipes.
User Story 4: As a user, I can favourite and unfavourite recipes so that I can save recipes I want to try later.
User Story 5: As a user, I can view a list of my favourite recipes so that I can focus on recipes I want to try or cook.
User Story 6: As a user, I can search for recipes by keywords so that I can find specific recipes more easily.
User Story 7: As a user, I can delete my recipes so that I can permanently remove recipes I no longer want to keep.
User Story 8: As a user, I can edit my recipes so that I can correct mistakes or update ingredients, instructions, or titles.
User Story 9: As a user, I can view recipe comments so that I can read feedback and additional tips from other users.
User Story 10: As a user, I can comment on recipes so that I can interact with other users and share my experience or suggestions.
User Story 11: As a user, I can edit or delete my comments on a recipe in case of input errors or changes in feedback.
User Story 12: As a user, I can manage my recipes so that I can add, edit, or delete my own recipes as needed.
User Story 13: As a user, I can request a password reset so that I can regain access to my account if I forget my password.
User Story 14: As a user, I can log in to my account so that I can access my saved recipes, favourites, and profile.
User Story 15: As a user, I can log out so that other people using the same device cannot access my account.
User Story 16: As a user, I can have a profile page so that I and others can view my saved recipes, favourites, and personal information.
User Story 17: As a user, I can update my profile so that my information stays up to date.
User Story 18: As a user, I can add a profile picture so that others can easily recognise me on the site.
User Story 19: As a user, I can view the Home Page so that I can understand what the website is about and create an account or log in.
User Story 20: As a user, I can browse a list of recipe categories so that I can easily find recipes based on types like "Vegan," "Dessert," "Appetiser," etc.
User Story 21: As a user, I can create a recipe so that I can share my cooking experience with others. 
User Story 22: As a user, I can rate recipes so that I can give feedback on a recipe and help others make informed decisions.
User Story 23: As a user, I can filter recipes by ingredients so that I can find recipes based on what I have in my kitchen.
User Story 24: As a user, I can receive feedback when submitting a new recipe so that I can confirm the submission was successful.
User Story 1: As the site owner, I would want to validate users' data entries on sign-up so that users can create a login that meets the required standards.
User Story 2: As the site owner, I would want to ensure only logged-in users can post recipes, comment, or edit their profile so that data privacy is maintained.
User Story 3: As the site owner, I would want the ability to remove recipes and recipe comments so that I can maintain a clean and friendly environment on the site.
User Story 4: As the site owner, I would want the site to be fully responsive so that users can access and interact with the website across multiple devices, providing a good user experience.
User Story 5: As the site owner, I would want to use the app’s search function so that I can find particular recipes by their title or ingredients.
User Story 6: As the site owner, I would want a 404 error page so that users do not have to use the back navigation button if an error occurs.

## Database Diagram

[Database Diagram](/assets/readme.docs/db-diagram.png)

## Design

### Colour Scheme

![Colour pallete](/assets/readme.docs/colours.png)

The colours of the site were chosen to fit the theme of the website. I chose these bright colours as they show creativity and fun.

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

* ### Navigation Bar                              \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

Site user [navbar](/documentation/features/Navbar.png) contains the logo (acts as home button), Home, About, Services dropdown menu, Contact us and options (flag icons) for Greek or English language.

* #### Navigation Bar (Admin user)

Admin user [navbar](/documentation/features/AdminNavbar.png) contains the logged in icons plus the Add listing and Messages.

* ### Footer

The [Footer](/documentation/features/Footer.png) displays links for the About us, Contact and Listings(Properties) - Facebook, Instagram and Linkedin icons. At the bottom there are the privacy policy and terms & conditions.

___

### Home Page

The [Home Page](/documentation/features/Home_Page.png) contains 3 full screen hero images, rotated in a carusel, in the center of the iamges displays the search bar. Scrolling down there is some info about the website and 4 cards with the services (Asset Management, Advisory, Valuation and Listings(Properties)). At the bottom of the page displays 4 featured listings.

### Services Pages

All services page display a full screen hero image and bellow content regarding the service

[Asset Management Page](/documentation/features/AssetMGM.mp4)

[Advisory Page](/documentation/features/Advisory.mp4)

[Valuation Page](/documentation/features/Valuation.mp4)

### Contact Page

The [Contact Page](/documentation/features/Contact_us_Page.png) displays a contact form.

### Listings Page

The [Listings Page](/documentation/features/Listings.mp4) displays the search bar, the listings in a container with infinite scroll and in screens with more than 1200px a google map frame with pins of each listing.

### Listing Page

  The [Listing Page](/documentation/features/Listing.mp4) displays the listing's 5 first images images on top of the page for large screens and in a carusel for small screens, when hovered over image a tooltip with a message to click on image for larger view, the listing's features bellow, a contact form on the right hand of the screen and a google maps frame with listing's pin location.
  
#### Images Modal

  When click on an image, the [modal](/documentation/features/Images_modal.png) will pop up and display the images in a carusel.

### Add Listing Page

  The Add Listing Page contains a form with fields to:

* [Upload images](/documentation/features/Add_images_order.png) - choose which to be the first image and the order of the images when rendered
* [Basic info](/documentation/features/basic_info.png) - type, sale_type, subtype, currency, price, availability and description
* [Address information](/documentation/features/address_info.png) - address_number,address_street, postcode, municipality, region, latitude, longitude
  
  When type [Land](/documentation/features/AddLand.mp4) has been selected
  * Land Technical section fields - land area, cover coeficcient, building coefficient, length of facade, orienation, view, slope, zone, distance from sea, power type and heating system.

  When type [Commercial](/documentation/features/AddCommercial.mp4) has been selected
  * Commercial Features section - floor area, land area, levels, floor level, WC, bathrooms,
  rooms, heating system, energy class, power type and year built.
  
  When type [Residential](/documentation/features/AddResidential.mp4) has been selected

  * floor area, land area, levels, bedrooms, floor level, kitchens, WC, bathrooms,
  living rooms, heating system, power type, energy class, floor type, glass type, opening frames, year built, service charges

  For each selection there the listing amenities with checkboxes for the user to select.

### Edit Listing Page

  The [Edit Listing Page](/documentation/features/Listing_Edit.png) contains the existed images with a checkbox next to each, a button to delete images, a button to add images and all fields from the Add Listing Page filled with the existed values.

### Messages Page

  The [Messages Page](/documentation/features/Messages_Page.png) displays a search bar that has fields for query (name, email, subject) and
  a list of the message in a container with infinite scroll.
  
#### Message page

  The [Message Page](/documentation/features/Message_Page.png) displays the message in a card with the fields of name, email, subject and
    message.

### Sign in Page

The [Sign in Page](/documentation/features/Sign_in.png) displays the Sign in form, an image on the right and a link to sign up page.

### Sign up Page

The [Signup Page](/documentation/features/Sign_up.png) displays the sign up form, an image on the rigt and a link to sign in page.

### Profile Page

The [Profile Page](/documentation/features/Profile_Page.png) displays the user's details and a carret down icon to open the [dropdown menu](/documentation/features/Profile_dropdown.png)
that display icons to [edit profile](/documentation/features/Profile_Edit.png), [change username](/documentation/features/Change_username.png) and [changee password](/documentation/features/Change_password.png)

#### Edit Profile Page

The [Edit Profile](/documentation/features/Profile_Edit.png) displays a form to update the image, the first name, the last name, the email address and the phone number.

#### Change Username Page

The [Change username Page](/documentation/features/Change_username.png) displays a form to udpate the username.

#### Change Password Page

The [Change password Page](/documentation/features/Change_password.png) displays a form with 2 fields (new password and confirm password).

### 403 error page

The [403 page](/documentation/features/403.png) displays an image with a text error 403: Forbidden.

### 404 error page

The [404 page](/documentation/features/404.png) displays an image with a text error 404: Not found.

## Reusable Components

[SearchBar.js](/documentation/features/Searchbar.png) that exists in the home page, the about page, the listings page and
if logged in user, in the wishlist page.

Dropdown menu: exists in the [Listing.js](/documentation/features/DropdownMenu.png) (only for admins) and in the [ProfilePage.js](/documentation/features/DropdownMenuProfile.png)

ListingFormTextFields.js: displays the input fields for the ListingCreateForm and ListingEditForm.

ListingHeader.js: displays basic info for a property(listing) and it exists in the Listing, ListingsWishlistPage.

ListingsWishlistPage.js : to display all the listings, results of listings after a search and the user's wishlist

axiosDefault.js : for ease of communication with the backend API.

Asset.js : to supply the loading spinner & user avatar throughout the site.

CurrentUserContext.js : confirm users logged-in status to determine what functionality is available to that user.

useRedirect.js : redirects a user to another page if they are not authorised to be on the page they are trying to access.

utils.js : supplies functionality to all of the components that utilise the Infinite Scroll.

ScrolltoTop.js: scrolls the page to top when user change page.

useFetchListings.js: to fetch listings from the API

useFetchWishlist.js: to fetch user's wishlist from the API

useUserStatus.js: to get user status to determine what functionality is available to that user.
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
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
* [React google maps](https://visgl.github.io/react-google-maps/) - To render maps with listing's pinned location
* [i18next](https://www.i18next.com/) - To load English and Greek translation
* [React cookie consent](https://www.npmjs.com/package/react-cookie-consent)- To get user's consent to load google maps
* [React phone number input](https://www.npmjs.com/package/react-phone-number-input) - To format and validate phone field

#### Programs Used

* [GitHub](https://github.com/) - To save and store files for the website.
* [VSCode](https://code.visualstudio.com/) - Code editor used for local development.
* [DBdiagram](/https://dbdiagram.io/home) - To create database diagrams.
* [TinyPNG](https://tinypng.com/) - To reduce size of the images.
* [Shields IO](https://shields.io/) - To add badges to README.
* [Obsidian](https://code.visualstudio.com/) - To keep notes.
* [Balsamiq](https://balsamiq.com/) - Used to create wireframes.
* [Techsini](https://techsini.com/multi-mockup/index.php) - To display the web image in various devices.
* [Google Developer Tools](https://developer.chrome.com/docs/) - To test features, resposiveness and stylilng.
* [TinyPNG](https://tinypng.com/) - To reduce size of the images.
* [Favicon](https://favicon.io/) - To create favicon.
* [Coolors](https://coolors.co/) - To create palette image to README.

## Testing \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
Please see [Testing](TESTING.md)
