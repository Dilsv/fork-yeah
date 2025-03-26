import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/esm/Container';
import { useLocation } from 'react-router-dom';
import { axiosReq } from '../../api/axiosDefault.js';
import Asset from '../../components/Asset';

const RecipesPage = () => {
    const [recipes, setRecipes] = useState([{ results: [] }]);
    const [hasLoaded, setHasLoaded] = useState(false);
    const { pathname } = useLocation();

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const { data } = await axiosReq.get("/recipes/");
                setRecipes(data);
                setHasLoaded(true);
            } catch (error) {
                console.error(error);
            }
        }
        setHasLoaded(false);
        fetchRecipes();
    }, []);


    return (
        <Container>
            {hasLoaded ? (
                <div>
                    <h1>Recipes</h1>
                    <p>{pathname}</p>
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
    )
}

export default RecipesPage;