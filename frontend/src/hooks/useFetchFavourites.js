import { useEffect, useState } from "react";
import { axiosReq } from "../api/axiosDefault.js";
import { useLocation } from "react-router-dom";
import { useCurrentUser } from "../contexts/CurrentUserContext";

const useFetchFavourites = (props) => {
  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === props?.owner;
  const { pathname } = useLocation();
  const [recipeId, setRecipeId] = useState([]);
  const [favouritesId, setFavouritesId] = useState(null);
  const [addedToList, setAddedToList] = useState(null);
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    // Fetch the favourites from the API.
    const fetchFavourites = async () => {
      try {
        const { data } = await axiosReq.get(`/favourites/`);
        // Find the favourites id that matches the current user's username and the recipe id.
        const favouritesId = data.results.find(
          (result) =>
            result.recipe === props.id && result.owner === currentUser?.username
        );

        if (mounted) {
          // If the favourites id exists, set the favourites id state.
          if (favouritesId) {
            setFavouritesId(favouritesId?.id);
          }
          // If the favourites id exists and the owner matches the current user's username, set the added to list state to true.
          if (favouritesId && favouritesId.owner === currentUser?.username) {
            setAddedToList(true);
          }
          setRecipeId(data.results.map((result) => result.recipe));
        }
      } catch (err) {}
    };
    fetchFavourites();
    return () => {
      setMounted(false);
    };
  }, [
    pathname,
    is_owner,
    currentUser?.username,
    props.id,
    addedToList,
    mounted,
    favouritesId,
  ]);
  return {
    recipeId,
    setRecipeId,
    favouritesId,
    setFavouritesId,
    pathname,
    is_owner,
    currentUser,
    addedToList,
    setAddedToList,
  };
};

export default useFetchFavourites;
