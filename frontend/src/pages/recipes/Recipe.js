import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import styles from "../../App.module.css";
import useFetchFavourites from "../../hooks/useFetchFavourites";
import { axiosReq, axiosRes } from "../../api/axiosDefault.js";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { Link, useHistory } from "react-router-dom";
import { MoreDropdown } from "../../components/MoreDropdown";
import btnStyles from "../../styles/Button.module.css";

export const Recipe = (props) => {
  const {
    id,
    owner,
    title,
    category,
    description,
    image,
    instructions,
    ingredients,
    created_at,
    updated_at,
    recipePage,
    setRecipe,
  } = props;

  const recipeDate = updated_at === created_at ? true : false;
  const currentUser = useCurrentUser();

  const { addedToList, setAddedToList, favouritesId, setFavouritesId } =
    useFetchFavourites(props);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState(null);
  const loggedOut = currentUser === null;
  const is_owner = currentUser?.username === owner;
  const history = useHistory();

  const handleAddToList = async () => {
    try {
      const { data } = await axiosReq.post(`/favourites/`, { recipe: id });
      setRecipe((prevRecipe) => ({
        ...prevRecipe,
        results: prevRecipe.results.map((recipe) => {
          return recipe.id === id
            ? {
                ...recipe,
                recipe_id: data.id,
              }
            : recipe;
        }),
      }));
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        setAddedToList(true);
      }, 3000);
    } catch (err) {
      setErrors(err.response?.data);
    }
  };

  const handleRemoveFromList = async () => {
    try {
      await axiosReq.delete(`/favourites/${favouritesId}/`);
      setRecipe((prevRecipe) => {
        return {
          ...prevRecipe,
          favourites: prevRecipe.favourites - 1,
        };
      });
      setSuccess(true);
      setFavouritesId(null);
      setTimeout(() => {
        setSuccess(false);
        setAddedToList(false);
      }, 3000);
    } catch (err) {
      setErrors(err.response?.data);
    }
  };

  const handleEdit = () => {
    history.push(`/recipes/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/recipes/${id}/`);
      history.goBack();
    } catch (err) {}
  };

  return (
    <Container className="mt-5">
      <div className="d-flex align-items-center">
        <p className="h1 ms-auto ">{title}</p>
        <div className="ms-auto">
          {is_owner && recipePage && (
            <MoreDropdown handleEdit={handleEdit} handleDelete={handleDelete} />
          )}
        </div>
      </div>
      <Row className="justify-content-center align-items-center">
        <Col md={2} className="d-flex me-auto justify-content-center">
          <Image src={image} alt={title} className={styles.Image} />
        </Col>
        <Col md={10} className="text-left mb-auto d-flex flex-column">
          <div className="d-flex">
            <p className="">Recipe by {owner} </p>
            <p className="text-muted ms-auto">
              {recipeDate
                ? `Created on : ${created_at}`
                : `Updated on ${updated_at}`}
            </p>
          </div>
          <p className="">Category: {category}</p>
          <div>
            <p className="h2">Description</p>
            <p>{description}</p>
          </div>
        </Col>
      </Row>
      <Row className="pt-2">
        <div className="col-12 d-flex justify-content-end flex-column">
          {loggedOut ? (
            <>
              <Link to="/signin" className={` ${btnStyles.Button} ${btnStyles.Bright} my-2 ms-auto`}>
                Add to favourites
              </Link>
            </>
          ) : !is_owner && recipePage ? (
            addedToList ? (
              <>
                {success && (
                  <Alert variant="danger" className="w-100">
                    Removed from favourites
                  </Alert>
                )}
                {errors?.detail && (
                  <p className="text-danger">{errors.detail}</p>
                )}

                <Button
                  className={` ${btnStyles.Button} ${btnStyles.Bright} my-2 ms-auto`}
                  onClick={handleRemoveFromList}
                >
                  Remove from favourites
                </Button>
              </>
            ) : (
              <>
                {success && (
                  <Alert variant="success" className={`w-100`}>
                    Added to favourites
                  </Alert>
                )}
                {errors?.detail && (
                  <p className="text-danger">{errors.detail}</p>
                )}

                <Button
                  className={` ${success ? "mt-2" : null} ${btnStyles.Button} ${
                    btnStyles.Bright
                  } my-2 ms-auto w-25`}
                  onClick={handleAddToList}
                >
                  Add to favourites
                </Button>
              </>
            )
          ) : null}
        </div>
      </Row>
      <hr />
      <Row sm={12} className="mt-4">
        <p className="h2">Ingredients</p>
        <ListGroup className="ps-3">
          {ingredients?.map((ing) => (
            <li key={ing.id}>
              {ing.ingredient_name} ({ing.quantity} {ing.unit})
            </li>
          ))}
        </ListGroup>
      </Row>
      <hr />
      <Row className="mt-4">
        <h2>Instructions</h2>
        <p>{instructions}</p>
      </Row>
    </Container>
  );
};
