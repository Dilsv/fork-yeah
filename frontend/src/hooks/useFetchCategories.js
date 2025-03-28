import { useEffect, useState } from "react";
import { axiosReq } from "../api/axiosDefault.js";

const useFetchCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axiosReq.get("/categories/");
        setCategories(data.results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCategories();
  }, []);
  return { categories };
};

export default useFetchCategories;
