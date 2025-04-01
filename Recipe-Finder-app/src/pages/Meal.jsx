import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom'

const Meal = () => {
    const id=useParams().id;
    const [meal,setMeal]=useState(null);
    const location= useLocation();
    async function fetchData() {
        const url = location.pathname.includes("/recipe")
            ? `https://www.themealdb.com/api/json/v1/1/search.php?s=${id}`
            : `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
        const response = await axios.get(url);
        const resData = response.data.meals[0];
        setMeal(resData);
        console.log(resData);
    }

    useEffect(() => {
        fetchData();
    }, [id]);
    
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      let inKey='strIngredient'+`${i}`
      let mKey='strMeasure'+`${i}`;
      const ingredient = meal?.[inKey];
      const measure = meal?.[mKey];
    if (ingredient && ingredient.trim() !== "") {
      ingredients.push(`${measure} ${ingredient}`);
    }
  }
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg pt-24">
      {/* Meal Thumbnail */}
      <img
        src={meal?.strMealThumb}
        alt={meal?.strMeal}
        className="w-full h-72 object-cover rounded-lg"
      />

      {/* Meal Name */}
      <h1 className="text-3xl font-bold text-gray-800 mt-4">{meal?.strMeal}</h1>

      {/* Ingredients Section */}
      <h2 className="text-2xl font-semibold text-gray-700 mt-6">Ingredients:</h2>
      <ul className="list-disc list-inside text-gray-600 mt-2">
        {ingredients.map((item, index) => (
          <li key={index} className="py-1">{item}</li>
        ))}
      </ul>

      {/* Cooking Instructions */}
      <h2 className="text-2xl font-semibold text-gray-700 mt-6">Steps to Cook:</h2>
      <p className="text-gray-600 mt-2 leading-relaxed">{meal?.strInstructions}</p>

      {/* YouTube Video (if available) */}
      {meal?.strYoutube && (
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-700">Watch Tutorial:</h2>
          <iframe
            className="w-full h-64 mt-2 rounded-lg"
            src={`https://www.youtube.com/embed/${meal?.strYoutube?.split("v=")[1]}`}
            title="YouTube video player"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};


export default Meal
