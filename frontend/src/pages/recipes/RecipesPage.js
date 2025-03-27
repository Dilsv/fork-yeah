import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import { useLocation } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefault.js";
import Asset from "../../components/Asset";
import Form from "react-bootstrap/Form";
import styles from "../../styles/RecipesPage.module.css";
import Row from "react-bootstrap/esm/Row";

const RecipesPage = () => {
  const [recipes, setRecipes] = useState([{ results: [] }]);
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const { data } = await axiosReq.get(`/recipes/?search=${query}`);
        setRecipes(data);
        setHasLoaded(true);
      } catch (error) {
        console.error(error);
      }
    };
    setHasLoaded(false);
    const timer = setTimeout(() => {
      fetchRecipes();
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [query, pathname]);

  return (
    <Container className="mt-5">
      <Row className="p-1">
        <i className={`fas fa-search ${styles.SearchIcon}`} />
        <Form className={styles.SearchBar} onSubmit={(e) => e.preventDefault()}>
          <Form.Control
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            placeholder="Search"
          />
        </Form>
      </Row>
      {hasLoaded ? (
        <div>
          <h1>Recipes</h1>
          {recipes.results.map((recipe) => (
            <div key={recipe.id}>
              <h2>{recipe.title}</h2>
              <p>{recipe.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <Asset spinner message="Loading recipes..." />
      )}
    </Container>
  );
};

export default RecipesPage;
