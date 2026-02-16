import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const RecipeDetail = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("/src/data.json")
            .then((res) => res.json())
            .then((data) => {
                const found = data.find((r) => String(r.id) === String(id));
                setRecipe(found);
                setLoading(false);
            })
            .catch((err) => {
                setError("Failed to load recipe");
                setLoading(false);
            });
    }, [id]);

    if (loading) return <div className="text-center mt-10">Loading...</div>;
    if (error || !recipe) return <div className="text-center mt-10 text-red-500">Recipe not found.</div>;

    return (
        <div className="min-h-screen bg-gray-100 py-8">
            <div className="container mx-auto px-4 max-w-2xl">
                <Link to="/" className="text-blue-500 hover:underline mb-4 inline-block">&larr; Back to Home</Link>
                <div className="bg-white rounded-lg shadow-md p-6">
                    <img
                        src={recipe.image}
                        alt={recipe.title}
                        className="w-40 h-40 object-cover rounded-full mx-auto mb-6"
                    />
                    <h1 className="text-3xl font-bold mb-4 text-center">{recipe.title}</h1>
                    <p className="text-gray-700 mb-6 text-center">{recipe.summary}</p>
                    {/* Mocked ingredients and instructions for now */}
                    <div className="mb-6">
                        <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
                        <ul className="list-disc list-inside text-gray-600">
                            <li>Ingredient 1</li>
                            <li>Ingredient 2</li>
                            <li>Ingredient 3</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold mb-2">Instructions</h2>
                        <ol className="list-decimal list-inside text-gray-600 space-y-1">
                            <li>Step 1: ...</li>
                            <li>Step 2: ...</li>
                            <li>Step 3: ...</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipeDetail;
