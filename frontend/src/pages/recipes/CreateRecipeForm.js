import { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Image from "react-bootstrap/Image";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import Asset from "../../components/Asset";
import upload from "../../assets/upload.png";
import { axiosReq } from "../../api/axiosDefault.js";

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
  const [ingredients, setIngredients] = useState([]);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const imageInput = useRef(null);
  const history = useHistory();

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
      <Form onSubmit={handleSubmit}>
        <h2>Create Recipe</h2>
        <Form.Control
          as="select"
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
        </Form.Control>

        <Form.Control
          type="text"
          placeholder="Title"
          name="title"
          value={title}
          onChange={handleChange}
          required
          className="mb-3"
        />
        <Form.Control
          as="textarea"
          placeholder="Description"
          name="description"
          value={description}
          onChange={handleChange}
          required
          className="mb-3"
        />
        <Form.Control
          as="textarea"
          placeholder="Instructions"
          name="instructions"
          value={instructions}
          onChange={handleChange}
          required
          className="mb-3"
        />

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
              <Asset src={upload} message="Click or tap to upload an image" />
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

        {/* Ingredient Selection */}
        <Form.Control
          as="select"
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
        </Form.Control>

        {/* List of Selected Ingredients */}
        {selectedIngredients?.map((ingredient, index) => (
          <div key={index} className="d-flex align-items-center mb-2 ">
            <span className="me-2 text-capitalize">
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
            <Form.Control
              as="select"
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
            </Form.Control>
          </div>
        ))}

        <Button type="submit">Create Recipe</Button>
      </Form>
    </Container>
  );
};

export default CreateRecipeForm;
