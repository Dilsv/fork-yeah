import { useEffect, useState } from 'react'
import { axiosReq } from '../api/axiosDefault.js';

const useFetchIngredients = () => {
    const [ingredients, setIngredients] = useState([]);
    const [addedIngredient, setAddedIngredient] = useState(false);

    useEffect(() => {
        const fetchIngredients = async () => {
            try {
                const response = await axiosReq.get("/ingredients/");
                setIngredients(response.data.results);
                setAddedIngredient(false);
            } catch (error) {
                console.error("Error fetching ingredients", error);
            }
        };
        fetchIngredients();
    }, [addedIngredient]);
    return { ingredients, setIngredients, addedIngredient, setAddedIngredient };
}

export default useFetchIngredients;
