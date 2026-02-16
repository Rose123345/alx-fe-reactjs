import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch("/src/data.json")
            .then((res) => res.json())
            .then((data) => setRecipes(data))
            .catch((err) => console.error("Failed to load recipes", err));
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 py-8">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold mb-8 text-center">Recipe Sharing Platform</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {recipes.map((recipe) => (
                        <div
                            key={recipe.id}
                            className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow hover:scale-105 transform duration-200 p-4 flex flex-col items-center"
                        >
                            <img
                                src={recipe.image}
                                alt={recipe.title}
                                className="w-32 h-32 object-cover rounded-full mb-4"
                            />
                            <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
                            <p className="text-gray-600 mb-4 text-center">{recipe.summary}</p>
                            <Link
                                to={`/recipe/${recipe.id}`}
                                className="text-blue-500 hover:text-blue-700 font-medium"
                            >
                                View Details
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomePage;
