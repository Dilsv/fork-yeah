import { useEffect, useState } from 'react'
import { axiosReq } from '../api/axiosDefault.js';

const useFetchIngredients = () => {
    const [ingredients, setIngredients] = useState({ results: [] });
    const [addedIngredient, setAddedIngredient] = useState(false);
    const [hasLoaded, setHasLoaded] = useState(false);
    const [query, setQuery] = useState("");

    useEffect(() => {
        const fetchIngredients = async () => {
            try {
                const { data } = await axiosReq.get(`/ingredients/?search=${query}`);
                setIngredients(data);
                setHasLoaded(true);
                setAddedIngredient(false);
            } catch (error) {
                console.error("Error fetching ingredients", error);
            }
        };
        fetchIngredients();
    }, [addedIngredient, query]);
    return { ingredients, setIngredients, addedIngredient, setAddedIngredient, hasLoaded, setHasLoaded, query, setQuery };
}

export default useFetchIngredients;