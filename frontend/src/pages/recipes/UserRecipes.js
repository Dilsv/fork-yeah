import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import { useLocation } from 'react-router-dom';
import { axiosReq } from '../../api/axiosDefault.js';
import useFetchCategories from '../../hooks/useFetchCategories';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import RecipesPageComponent from '../../components/RecipesPageComponent';

const UserRecipes = (props) => {

    const currentUser = useCurrentUser();
    const owner = currentUser?.username;

    const [recipes, setRecipes] = useState({ results: [] });
    const [hasLoaded, setHasLoaded] = useState(false);
    const { pathname } = useLocation();
    const [query, setQuery] = useState("");

    const { categories } = useFetchCategories();
    const [category, setCategory] = useState("");

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const { data } = await axiosReq.get(`/my-recipes/?search=${query}&category=${category}`);
                setRecipes(data);
                setHasLoaded(true);
            } catch (error) {
                console.error(error);
            }
        }
        setHasLoaded(false);
        fetchRecipes();
        const timer = setTimeout(() => {
            fetchRecipes();
        }, 1000);
        return () => {
            clearTimeout(timer);
        };
    }, [query, pathname, category, owner, currentUser?.username]);


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
    )
}

export default UserRecipes;