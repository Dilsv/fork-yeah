import { useState, useRef, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";
import Image from "react-bootstrap/Image";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import Asset from "../../components/Asset";
import upload from "../../assets/upload.png";
import { axiosReq } from "../../api/axiosDefault.js";
import useFetchIngredients from "../../hooks/useFetchIngredients";
import useFetchCategories from "../../hooks/useFetchCategories";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
import styles from "../../styles/CreateEditForm.module.css";

const EditRecipeForm = () => {
  const { id } = useParams();
  const [recipeData, setRecipeData] = useState({
    category: "",
    title: "",
    description: "",
    instructions: "",
    image: "",
  });
  const { title, description, instructions, image, category } = recipeData;
  const [errors, setErrors] = useState(null);

  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");
  const imageInput = useRef(null);
  const history = useHistory();

  const {
    ingredients,
    setIngredients,
    setAddedIngredient,
    hasLoaded,
    query,
    setQuery,
  } = useFetchIngredients();
  const { categories } = useFetchCategories();

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(`/recipes/${id}/`);
        const {
          title,
          description,
          instructions,
          category,
          image,
          ingredients,
          is_owner,
        } = data;
        is_owner
          ? setRecipeData({
              title,
              description,
              instructions,
              category,
              image,
            })
          : history.push("/");

        setSelectedIngredients(
          ingredients.map((ing) => ({
            id: ing.id,
            ingredient: ing.ingredient,
            name: ing.ingredient_name,
            quantity: ing.quantity,
            unit: ing.unit,
          }))
        );
      } catch (error) {
        console.error("Error fetching recipe", error);
      }
    };
    handleMount();
  }, [id, history]);

  const handleChangeImage = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(image);
      setRecipeData({
        ...recipeData,
        image: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  const handleChange = (e) => {
    setRecipeData({
      ...recipeData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCreateIngredient = async (e) => {
    e.preventDefault();

    if (!newIngredient.trim()) return;

    try {
      const response = await axiosReq.post("/ingredients/", {
        name: newIngredient,
      });
      handleAddIngredient(response.data);
      setAddedIngredient(true);
      setNewIngredient("");
    } catch (error) {
      console.error("Error creating ingredient", error);
    }
  };

  const handleAddIngredient = (ingredientId) => {
    const ingredient = ingredients.results.find(
      (ing) => ing.id === parseInt(ingredientId)
    );
    if (
      ingredient &&
      !selectedIngredients.some((ing) => ing.ingredient === ingredient.id)
    ) {
      setSelectedIngredients([
        ...selectedIngredients,
        {
          ingredient: ingredient.id,
          name: ingredient.name,
          quantity: "",
          unit: "g",
        },
      ]);
    }
  };

  const handleIngredientChange = (index, field, value) => {
    setSelectedIngredients((prev) =>
      prev.map((ing, i) => (i === index ? { ...ing, [field]: value } : ing))
    );
  };

  const handleRemoveIngredient = (id) => {
    const updatedIngredientsList = selectedIngredients.filter(
      (ing) => ing.ingredient !== id
    );
    setSelectedIngredients(updatedIngredientsList);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formattedRecipe = {
      title,
      description,
      instructions,
      category,
      ingredients: selectedIngredients.map((ing) => ({
        ingredient: ing.ingredient,
        quantity: ing.quantity,
        unit: ing.unit,
      })),
    };
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("instructions", instructions);
    formData.append("category", category);
    if (imageInput?.current?.files[0]) {
      formData.append("image", imageInput.current.files[0]);
    }
    formData.append("ingredients", JSON.stringify(formattedRecipe.ingredients));

    try {
      await axiosReq.put(`/recipes/${id}/`, formData);
      history.push(`/recipes/${id}`);
    } catch (error) {
      console.error("Error creating recipe:", error);
      if (error.response?.status !== 401) {
        setErrors(error.response?.data);
      }
    }
  };

  return (
    <Container className="mt-5 pt-5">
      <Col md={6} className="justify-content-center mx-auto">
        {errors?.non_field_errors?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}
        <Form onSubmit={handleSubmit}>
          <Row className="justify-content-center">
            <h1>Update Recipe</h1>
          </Row>
          <Row className="justify-content-center">
            <hr />
          </Row>
          <Row className="justify-content-center">
            <Form.Control
              type="text"
              placeholder="Title"
              name="title"
              value={title}
              onChange={handleChange}
              required
              className="mb-3"
            />
            {errors?.title?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
          </Row>
          <Row className="justify-content-center">
            <hr />
          </Row>
          <Row className="justify-content-center">
            <Form.Select
              placeholder="Category"
              name="category"
              value={category}
              onChange={handleChange}
              required
              className="mb-3 text-capitalize"
            >
              {categories.map((category) => (
                <option key={category.id} value={category.name}>
                  {category.name}
                </option>
              ))}
            </Form.Select>
            {errors?.category?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
          </Row>
          <Row className="justify-content-center">
            <hr />
          </Row>
          <Row className="justify-content-center">
            <Form.Control
              as="textarea"
              rows={5}
              placeholder="Description"
              name="description"
              value={description}
              onChange={handleChange}
              required
              className="mb-3"
            />
            {errors?.description?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
          </Row>
          <Row className="justify-content-center">
            <hr />
          </Row>
          <Row className="justify-content-center ">
            {/* Ingredient Selection */}
            <p className="h5 p-0">Select Ingredients</p>
            <p className="text-muted">
              Select an ingredient from the dropdown or create a new one
            </p>

            <Form.Control
              type="text"
              placeholder="Search Ingredients"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="mb-3"
            />
            {errors?.ingredients?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

            <Row className="justify-content-center">
              {query && hasLoaded && ingredients.results.length > 0 ? (
                <Card className="w-100">
                  <Card.Body>
                    {ingredients.results
                      .filter((ingredient) =>
                        ingredient.name
                          .toLowerCase()
                          .includes(query.toLowerCase())
                      )
                      .map((ingredient) => (
                        <div key={ingredient.id}>
                          <InfiniteScroll
                            dataLength={ingredients.results.length}
                            next={() =>
                              fetchMoreData(ingredients, setIngredients)
                            }
                            hasMore={!!ingredients.next}
                            loader={<Asset spinner />}
                          >
                            <div
                              key={ingredient.id}
                              onClick={() => handleAddIngredient(ingredient.id)}
                              className={`${styles.IngListItem} me-2 text-capitalize border-bottom p-1 mb-2`}
                            >
                              {ingredient.id ===
                              selectedIngredients?.find(
                                (ing) => ing.ingredient === ingredient.id
                              )?.ingredient ? (
                                <i className="fas fa-check me-2" />
                              ) : null}
                              {ingredient.name}
                            </div>
                          </InfiniteScroll>
                        </div>
                      ))}
                  </Card.Body>
                </Card>
              ) : (
                <Asset
                  message={
                    query
                      ? "No ingredients found"
                      : "Start typing to find ingredients"
                  }
                />
              )}
            </Row>

            <Form.Control
              type="text"
              placeholder="Ingredient Name"
              value={newIngredient}
              onChange={(e) => setNewIngredient(e.target.value)}
            />
            {errors?.ingredient?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            <Button
              type="submit"
              onClick={handleCreateIngredient}
              className={` ${btnStyles.Button} ${btnStyles.Bright} my-3 w-50 me-auto`}
            >
              Create Ingredient
            </Button>

            {/* List of Selected Ingredients */}
            {selectedIngredients?.map((ing, index) => (
              <div
                key={ing.ingredient}
                className="d-flex align-items-center mb-2"
              >
                <span className="me-2 text-capitalize w-100">{ing.name}</span>
                <Form.Control
                  type="number"
                  placeholder="Quantity"
                  value={ing.quantity}
                  onChange={(e) =>
                    handleIngredientChange(index, "quantity", e.target.value)
                  }
                  required
                  className="me-2"
                />
                <Form.Select
                  value={ing.unit}
                  onChange={(e) =>
                    handleIngredientChange(index, "unit", e.target.value)
                  }
                >
                  <option value="g">Grams</option>
                  <option value="kg">Kilograms</option>
                  <option value="ml">Milliliters</option>
                  <option value="l">Liters</option>
                  <option value="cups">Cups</option>
                  <option value="tbsp">Tablespoons</option>
                  <option value="tsp">Teaspoons</option>
                  <option value="pcs">Pieces</option>
                </Form.Select>
                {errors?.quantity?.map((message, idx) => (
                  <Alert variant="warning" key={idx}>
                    {message}
                  </Alert>
                ))}
                {errors?.unit?.map((message, idx) => (
                  <Alert variant="warning" key={idx}>
                    {message}
                  </Alert>
                ))}
                <Button
                  onClick={() => handleRemoveIngredient(ing.ingredient)}
                  className="btn btn-danger ms-2"
                  type="button"
                >
                  Remove
                </Button>
              </div>
            ))}
          </Row>
          <Row className="justify-content-center">
            <hr />
          </Row>
          <Row className="justify-content-center">
            <Form.Control
              as="textarea"
              rows={10}
              placeholder="Instructions"
              name="instructions"
              value={instructions}
              onChange={handleChange}
              required
              className="mb-3"
            />
            {errors?.instructions?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
          </Row>
          <Row className="justify-content-center">
            <hr />
          </Row>
          <Row className="justify-content-center">
            <Form.Group className="text-center">
              {image ? (
                <>
                  <figure>
                    <Image className={appStyles.Image} src={image} rounded />
                  </figure>
                  <div>
                    <Form.Label
                      className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                      htmlFor="image-upload"
                    >
                      Change the image
                    </Form.Label>
                  </div>
                </>
              ) : (
                <Form.Label
                  className="d-flex justify-content-center"
                  htmlFor="image-upload"
                >
                  <Asset
                    src={upload}
                    message="Click or tap to upload an image"
                  />
                </Form.Label>
              )}

              <Form.Control
                type="file"
                id="image-upload"
                accept="image/*"
                onChange={handleChangeImage}
                ref={imageInput}
                hidden
              />
            </Form.Group>
            {errors?.image?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
          </Row>
          <Row className="justify-content-center">
            <hr />
          </Row>
          <Row className="justify-content-center">
            <Button
              type="submit"
              className={` ${btnStyles.Button} ${btnStyles.Bright} w-50 mb-3`}
            >
              Update Recipe
            </Button>
          </Row>
        </Form>
      </Col>
    </Container>
  );
};

export default EditRecipeForm;
