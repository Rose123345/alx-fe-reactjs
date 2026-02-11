import React from 'react';
import { Recipe } from '../types/Recipe';

interface RecipeItemProps {
  recipe: Recipe;
}

const RecipeItem: React.FC<RecipeItemProps> = ({ recipe }) => {
  return (
    <div className="recipe-item">
      <h3>{recipe.title}</h3>
      <p>{recipe.description}</p>
    </div>
  );
};

export default RecipeItem;