import React, { useState } from "react";

const AddRecipeForm = ({ onAdd }) => {
    const [title, setTitle] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [steps, setSteps] = useState("");
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);

    const validate = () => {
        const errs = {};
        if (!title.trim()) errs.title = "Title is required.";
        if (!ingredients.trim()) {
            errs.ingredients = "Ingredients are required.";
        } else if (ingredients.split("\n").filter((i) => i.trim()).length < 2) {
            errs.ingredients = "Please enter at least two ingredients (one per line).";
        }
        if (!steps.trim()) errs.steps = "Preparation steps are required.";
        return errs;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errs = validate();
        setErrors(errs);
        if (Object.keys(errs).length === 0) {
            onAdd && onAdd({ title, ingredients, steps });
            setSuccess(true);
            setTitle("");
            setIngredients("");
            setSteps("");
            setTimeout(() => setSuccess(false), 2000);
        }
    };

    return (
        <form
            className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md mt-8 space-y-6"
            onSubmit={handleSubmit}
        >
            <h2 className="text-2xl font-bold mb-4 text-center">Add New Recipe</h2>
            <div>
                <label className="block font-medium mb-1">Title</label>
                <input
                    type="text"
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
            </div>
            <div>
                <label className="block font-medium mb-1">Ingredients (one per line)</label>
                <textarea
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    rows={4}
                    value={ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
                />
                {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
            </div>
            <div>
                <label className="block font-medium mb-1">Preparation Steps</label>
                <textarea
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    rows={4}
                    value={steps}
                    onChange={(e) => setSteps(e.target.value)}
                />
                {errors.steps && <p className="text-red-500 text-sm mt-1">{errors.steps}</p>}
            </div>
            <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition-colors"
            >
                Add Recipe
            </button>
            {success && <p className="text-green-600 text-center">Recipe added successfully!</p>}
        </form>
    );
};

export default AddRecipeForm;
