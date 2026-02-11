import useRecipeStore from "../store/recipeStore";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div>
      <h3>Recipe List</h3>
      <ul>
        {recipes.map((recipe, index) => (
          <li key={index}>{recipe.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
