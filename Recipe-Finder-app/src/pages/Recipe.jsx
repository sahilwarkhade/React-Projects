import React, { useContext, useEffect, useState } from "react";
import { data } from "./Data";
// import { useParams } from "react-router-dom";
// import RecipeContext from "../context/RecipeContext";

const Recipe = () => {
    // const { id } = useParams(); // Get recipe ID from URL
    // const { recipes } = useContext(RecipeContext); // Get all recipes from context
    // const [recipe, setRecipe] = useState(null);

    // useEffect(() => {
    //     // Find the recipe by ID from the context
    //     const selectedRecipe = recipes.find((r) => r.id === parseInt(id));
    //     setRecipe(selectedRecipe);
    // }, [id, recipes]);

    // if (!recipe) return <div className="text-center text-gray-600">Loading...</div>;
    
    return (
        <div className="max-w-3xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-orange-500">{recipe.name}</h1>
            <img
                // src={recipe.image}
                // alt={recipe.name}
                className="w-full h-72 object-cover rounded-lg mt-4"
            />
            <p className="text-gray-700 mt-4">{recipe.description}</p>

            <h2 className="text-xl font-semibold mt-6">Ingredients:</h2>
            <ul className="list-disc list-inside mt-2">
                {/* {data.ingredients.map((ingredient, index) => (
                    <li key={index} className="text-gray-600">
                        {ingredient}
                    </li>
                ))} */}
            </ul>

            <h2 className="text-xl font-semibold mt-6">Instructions:</h2>
            <p className="text-gray-700 mt-2">{recipe.instructions}</p>
        </div>
    );
};

export default Recipe;



