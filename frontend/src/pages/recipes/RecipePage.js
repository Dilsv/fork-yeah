import React, { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefault.js";
import { Recipe } from "./Recipe";

const RecipePage = () => {
    const { id } = useParams();
    const history = useHistory();
    const [recipe, setRecipe] = useState({ results: [] });

    useEffect(() => {
        // Fetch the recipe from the API.
        const handleMount = async () => {
            try {
                const [{ data: recipe }] = await Promise.all([
                    axiosReq.get(`/recipes/${id}/`),
                ]);
                setRecipe({ results: [recipe] });
            } catch (err) {
                if (err.response.status === 404) {
                    history.push("/notfound");
                }
            }
        };
        handleMount();
    }, [id, history]);


    return (
        <>
            <Recipe {...recipe.results[0]} setRecipe={setRecipe} recipePage />
        </>
    )
}

export default RecipePage;