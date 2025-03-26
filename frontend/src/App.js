import Container from 'react-bootstrap/esm/Container';
import styles from './App.module.css';
import NavBar from './components/NavBar';
import { Route, Switch } from 'react-router-dom';
import NotFound from './pages/errors/NotFound';
import "./api/axiosDefault.js";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Container fluid className={styles.Main}>
        <Switch>
          <Route exact path="/" render={() => <h1>Home Page</h1>} />
          <Route exact path="/signin" render={() => <h1>Sign in</h1>} />
          <Route exact path="/signup" render={() => <h1>Sign up</h1>} />
          <Route exact path="/recipes" render={() => <h1>Recipes</h1>} />
          <Route exact path="/favourites" render={() => <h1>Favourites</h1>} />
          <Route render={() => <NotFound /> } />


        </Switch>
      </Container>
    </div>
  );
}

export default App;
