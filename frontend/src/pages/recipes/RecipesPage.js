import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import { useLocation } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefault.js";
import useFetchCategories from "../../hooks/useFetchCategories.js";
import RecipesPageComponent from "../../components/RecipesPageComponent";

const RecipesPage = () => {
  const [recipes, setRecipes] = useState({ results: [] });
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
      <RecipesPageComponent
        query={query}
        setQuery={setQuery}
        category={category}
        setCategory={setCategory}
        recipes={recipes}
        setRecipes={setRecipes}
        hasLoaded={hasLoaded}
        categories={categories}
        array={recipes.results}
      />
    </Container>
  );
};

export default RecipesPage;
