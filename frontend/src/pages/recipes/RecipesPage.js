import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Link, useLocation } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefault.js";
import Asset from "../../components/Asset";
import Form from "react-bootstrap/Form";
import styles from "../../styles/RecipesPage.module.css";
import useFetchCategories from "../../hooks/useFetchCategories.js";
import appStyles from "../../App.module.css";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";

const RecipesPage = () => {
  const [recipes, setRecipes] = useState([{ results: [] }]);
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();
  const [query, setQuery] = useState("");

  const { categories } = useFetchCategories();
  const [category, setCategory] = useState("");

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const { data } = await axiosReq.get(
          `/recipes/?search=${query}&category=${category}`
        );
        setRecipes(data);
        setHasLoaded(true);
      } catch (error) {
        console.error(error);
      }
    };
    setHasLoaded(false);
    fetchRecipes();
    const timer = setTimeout(() => {
      fetchRecipes();
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [query, pathname, category]);

  return (
    <Container className="mt-5">
      <i className={`fas fa-search ${styles.SearchIcon}`} />
      <Form className={styles.SearchBar} onSubmit={(e) => e.preventDefault()}>
        <Form.Control
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          placeholder="Search"
        />
        <Form.Select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="text-capitalize"
        >
          <option value="">All</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </Form.Select>
      </Form>
      <hr />

      {hasLoaded ? (
        recipes.results.length ? (
          <InfiniteScroll
            dataLength={recipes.results.length}
            next={() => fetchMoreData(recipes, setRecipes)}
            hasMore={!!recipes.next}
            loader={<Asset spinner />}
          >
            <Row className="justify-content-start align-items-center">
              {recipes.results.map((recipe) => (
                <Col key={recipe.id} className="mb-2" md={4}>
                  <Link
                    to={`/recipes/${recipe.id}`}
                    className="text-decoration-none"
                  >
                    <Card>
                      <Card.Title className="text-center pt-1">
                        {recipe.title}
                      </Card.Title>
                      <Card.Img
                        src={recipe.image}
                        alt={recipe.title}
                        className={`${appStyles.Image}`}
                        height={200}
                      />
                      <Card.Footer>{recipe.category}</Card.Footer>
                    </Card>
                  </Link>
                </Col>
              ))}
            </Row>
          </InfiniteScroll>
        ) : (
          <Asset message="No recipes found" />
        )
      ) : (
        <Asset spinner message="Loading recipes..." />
      )}
    </Container>
  );
};

export default RecipesPage;
