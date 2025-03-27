import Container from 'react-bootstrap/esm/Container';
import styles from './App.module.css';
import NavBar from './components/NavBar';
import { Route, Switch } from 'react-router-dom';
import "./api/axiosDefault.js";
import SignUpForm from './pages/auth/SignUpForm.js';
import SignInForm from './pages/auth/SignInForm';
import CreateRecipeForm from './pages/recipes/CreateRecipeForm';
import RecipePage from './pages/recipes/RecipePage';
import RecipesPage from './pages/recipes/RecipesPage.js';
import FavouritesPage from './pages/recipes/FavouritesPage';
import UserRecipes from './pages/recipes/UserRecipes';


function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Container fluid className={styles.Main}>
        <Switch>
          <Route exact path="/" render={() => <h1>Home Page</h1>} />
          <Route exact path="/signin" render={() => <SignInForm />} />
          <Route exact path="/signup" render={() => <SignUpForm />} />
          <Route exact path="/recipes/create" render={() => <CreateRecipeForm />} />
          <Route exact path="/recipes/:id" render={() => <RecipePage />} />
          <Route exact path="/recipes" render={() => <RecipesPage />} />
          <Route exact path="/my-recipes" render={() => <UserRecipes />} />
          <Route exact path="/favourites" render={() => <FavouritesPage /> } />

        </Switch>
      </Container>
    </div>
  );
}

export default App;