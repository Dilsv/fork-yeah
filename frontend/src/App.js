import Container from 'react-bootstrap/esm/Container';
import styles from './App.module.css';
import NavBar from './components/NavBar';
import { Route, Switch } from 'react-router-dom';
import "./api/axiosDefault.js";
import SignUpForm from './pages/auth/SignUpForm.js';
import SignInForm from './pages/auth/SignInForm';
import CreateRecipeForm from './pages/recipes/CreateRecipeForm';
import { RecipePage } from './pages/recipes/RecipesPage.js';


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
          <Route exact path="/recipes" render={() => <h1>Recipes</h1>} />
          <Route exact path="/favourites" render={() => <h1>Favourites</h1>} />

        </Switch>
      </Container>
    </div>
  );
}

export default App;