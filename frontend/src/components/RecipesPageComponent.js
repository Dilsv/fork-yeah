import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import styles from "../styles/RecipesPage.module.css";
import appStyles from "../App.module.css";
import Asset from "../components/Asset";
import { fetchMoreData } from "../utils/utils";
import InfiniteScroll from "react-infinite-scroll-component";
import Container from "react-bootstrap/esm/Container";

const RecipesPageComponent = ({
  query,
  setQuery,
  category,
  setCategory,
  recipes,
  setRecipes,
  hasLoaded,
  categories,
  array,
}) => {
  return (
    <>
      <Form className={styles.SearchBar} onSubmit={(e) => e.preventDefault()}>
        <Form.Group className="mb-3 d-flex align-items-center justify-content-between">
          <i className={`fas fa-search ${styles.SearchIcon}`} />
          <Form.Control
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            placeholder="Search"
            className="me-1"
          />
          <Form.Select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="text-capitalize ms-auto w-25"
          >
            <option value="">All categories </option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
      </Form>
      <hr />
      <Container
        id="scrollableDiv"
        style={{ height: 875, overflow: "auto" }}
        className="px-0"
      >
        {hasLoaded ? (
          array.length ? (
            <InfiniteScroll
              dataLength={array.length}
              next={() => fetchMoreData(recipes, setRecipes)}
              hasMore={!!recipes.next}
              loader={<Asset spinner />}
              scrollableTarget="scrollableDiv"
            >
              <Row className="justify-content-start align-items-center gx-2 mx-0">
                {array.map((recipe) => (
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
                          className={`${appStyles.Image} pb-1`}
                          height={200}
                        />
                        <Card.Footer className="text-capitalize">
                          {recipe.category}
                        </Card.Footer>
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
    </>
  );
};

export default RecipesPageComponent;
