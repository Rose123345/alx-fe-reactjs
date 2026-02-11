import React from 'react';
import RecipeList from './components/RecipeList';
import AddRecipe from './components/AddRecipe';

const App: React.FC = () => {
  return (
    <div>
      <h1>Recipe Sharing Application</h1>
      <AddRecipe />
      <RecipeList />
    </div>
  );
};

export default App;