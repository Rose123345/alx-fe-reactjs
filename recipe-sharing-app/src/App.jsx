import React, { useState } from "react";
import useRecipeStore from "./store/recipeStore";

function App() {
  const { recipes, addRecipe } = useRecipeStore();
  const [title, setTitle] = useState("");

  const handleAdd = () => {
    if (title !== "") {
      addRecipe({ title });
      setTitle("");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Recipe Sharing App</h2>

      <input
        type="text"
        placeholder="Enter recipe name"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button onClick={handleAdd}>Add Recipe</button>

      <h3>Recipes:</h3>
      <ul>
        {recipes.map((recipe, index) => (
          <li key={index}>{recipe.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
