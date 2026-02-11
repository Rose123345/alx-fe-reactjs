import React, { useState } from 'react';
import { useRecipeStore } from '../store/recipeStore';

const AddRecipe: React.FC = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const addRecipe = useRecipeStore((state) => state.addRecipe);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (title && description) {
            addRecipe({ title, description });
            setTitle('');
            setDescription('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Recipe Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <textarea
                placeholder="Recipe Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
            />
            <button type="submit">Add Recipe</button>
        </form>
    );
};

export default AddRecipe;