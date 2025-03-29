import Container from "react-bootstrap/esm/Container";
import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefault";
import SignUpForm from "./pages/auth/SignUpForm.js";
import SignInForm from "./pages/auth/SignInForm.js";
import CreateRecipeForm from "./pages/recipes/CreateRecipeForm";
import RecipePage from "./pages/recipes/RecipePage";
import RecipesPage from "./pages/recipes/RecipesPage.js";
import FavouritesPage from "./pages/recipes/FavouritesPage";
import UserRecipes from "./pages/recipes/UserRecipes";
import EditRecipeForm from "./pages/recipes/EditRecipeForm";
import ProfilePage from "./pages/profiles/ProfilePage";
import ProfileEditForm from "./pages/profiles/ProfileEditForm";
import UsernameForm from "./pages/profiles/UsernameForm";
import UserPasswordForm from "./pages/profiles/UserPassword";
import NotFound from "./pages/errors/NotFound";
import HomePage from "./pages/home/HomePage.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Container fluid className={styles.Main}>
        <Switch>
          <Route exact path="/" render={() => <HomePage />} />
          <Route exact path="/signin" render={() => <SignInForm />} />
          <Route exact path="/signup" render={() => <SignUpForm />} />
          <Route exact path="/recipes" render={() => <RecipesPage />} />
          <Route
            exact
            path="/recipes/create"
            render={() => <CreateRecipeForm />}
          />
          <Route exact path="/recipes/:id" render={() => <RecipePage />} />
          <Route
            exact
            path="/recipes/:id/edit"
            render={() => <EditRecipeForm />}
          />
          <Route exact path="/my-recipes" render={() => <UserRecipes />} />
          <Route exact path="/favourites" render={() => <FavouritesPage />} />
          <Route exact path="/profiles/:id" render={() => <ProfilePage />} />
          <Route
            exact
            path="/profiles/:id/edit"
            render={() => <ProfileEditForm />}
          />
          <Route
            exact
            path="/profiles/:id/edit/username"
            render={() => <UsernameForm />}
          />
          <Route
            exact
            path="/profiles/:id/edit/password"
            render={() => <UserPasswordForm />}
          />

          <Route render={() => <NotFound />} />
        </Switch>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
