import create from 'zustand';
import { Recipe } from '../types/Recipe';

interface RecipeStore {
  recipes: Recipe[];
  addRecipe: (recipe: Recipe) => void;
  setRecipes: (recipes: Recipe[]) => void;
}

export const useRecipeStore = create<RecipeStore>((set) => ({
  recipes: [],
  addRecipe: (recipe) => set((state) => ({ recipes: [...state.recipes, recipe] })),
  setRecipes: (recipes) => set({ recipes }),
}));