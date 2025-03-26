import { useEffect, useState } from 'react'
import { axiosReq } from '../api/axiosDefault.js';

const useFetchIngredients = () => {
    const [ingredients, setIngredients] = useState([]);

    useEffect(() => {
        const fetchIngredients = async () => {
            try {
                const response = await axiosReq.get("/ingredients/");
                setIngredients(response.data.results);
            } catch (error) {
                console.error("Error fetching ingredients", error);
            }
        };
        fetchIngredients();
    }, []);
    return { ingredients, setIngredients };
}

export default useFetchIngredients;