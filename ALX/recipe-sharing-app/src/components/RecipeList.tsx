import React from 'react';
import { useRecipeStore } from '../store/recipeStore';
import RecipeItem from './RecipeItem';

const RecipeList: React.FC = () => {
    const recipes = useRecipeStore(state => state.recipes);

    return (
        <div>
            <h2>Recipe List</h2>
            <ul>
                {recipes.map(recipe => (
                    <RecipeItem key={recipe.id} recipe={recipe} />
                ))}
            </ul>
        </div>
    );
};

export default RecipeList;