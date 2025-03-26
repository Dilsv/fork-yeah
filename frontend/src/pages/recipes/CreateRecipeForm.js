import { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Image from "react-bootstrap/Image";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import Asset from "../../components/Asset";
import upload from "../../assets/upload.png";
import { axiosReq } from "../../api/axiosDefault.js";
import useFetchIngredients from "../../hooks/useFetchIngredients";


const CreateRecipeForm = () => {
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

  const { ingredients, setAddedIngredient } = useFetchIngredients();

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
    const ingredient = ingredients.find(
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
    const updatedIngredients = [...selectedIngredients];
    updatedIngredients[index][field] = value;
    setSelectedIngredients(updatedIngredients);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("instructions", instructions);
    formData.append("category", category);
    formData.append("image", imageInput.current.files[0] || "");

    try {
      const { data } = await axiosReq.post("/recipes/", formData);
      // Add Ingredients to Recipe
      await Promise.all(
        selectedIngredients.map(async (ingredient) => {
          await axiosReq.post("/recipe-ingredients/", {
            recipe: data.id,
            ingredient: ingredient.ingredient,
            quantity: ingredient.quantity,
            unit: ingredient.unit,
          });
        })
      );
      history.push(`/recipes/${data.id}`);
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
            <h1>Create Recipe</h1>
          </Row>
          <Row className="justify-content-center">
            <p className="text-muted">
              Fill in the form to create a new recipe
            </p>
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
              className="mb-3"
            >
              <option value="">Select Category</option>
              <option value="breakfast">Breakfast</option>
              <option value="lunch">Lunch</option>
              <option value="dinner">Dinner</option>
              <option value="snack">Snack</option>
              <option value="dessert">Dessert</option>
              <option value="drink">Drink</option>
              <option value="other">Other</option>
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
            <Form.Select
              onChange={(e) => handleAddIngredient(e.target.value)}
              className="mb-3 text-capitalize"
            >
              <option value="">Add Ingredient</option>
              {ingredients.map((ingredient) => (
                <option
                  className="text-capitalize"
                  key={ingredient.id}
                  value={ingredient.id}
                >
                  {ingredient.name}
                </option>
              ))}
            </Form.Select>
            {errors?.ingredients &&
              Array.isArray(errors.ingredients) &&
              errors.ingredients.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}

            <p className="text-muted p-0">Create a New Ingredient</p>

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
              className="my-3 w-50 me-auto"
            >
              Create Ingredient
            </Button>

            {/* List of Selected Ingredients */}
            {selectedIngredients?.map((ingredient, index) => (
              <div key={index} className="d-flex align-items-center mb-2">
                <span className="me-2 text-capitalize w-100">
                  {
                    ingredients.find((ing) => ing.id === ingredient.ingredient)
                      ?.name
                  }
                </span>
                <Form.Control
                  type="number"
                  placeholder="Quantity"
                  value={ingredient.quantity}
                  onChange={(e) =>
                    handleIngredientChange(index, "quantity", e.target.value)
                  }
                  required
                  className="me-2"
                />
                <Form.Select
                  value={ingredient.unit}
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
                {errors?.ingredients?.map((ingredientError, index) => (
                  <div key={index}>
                    {ingredientError.quantity && (
                      <Alert variant="warning">
                        {ingredientError.quantity[0]}
                      </Alert>
                    )}
                    {ingredientError.unit && (
                      <Alert variant="warning">{ingredientError.unit[0]}</Alert>
                    )}
                  </div>
                ))}
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
            <Button type="submit" className="w-50 mb-3">
              Create Recipe
            </Button>
          </Row>
        </Form>
      </Col>
    </Container>
  );
};

export default CreateRecipeForm;
