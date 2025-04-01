import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchContext from "../Context/SearchContext";
import HeroImage from "../assets/HeroImage.avif"
import axios from "axios";
import RecipeCarousel from "./RecipeCarousel";
import CategoryContext from "../Context/Recipe/CategoryContext";

const Hero = () => {
    const {isSearchOpen, setIsSearchOpen}=useContext(SearchContext);
    const [countries,setCountries]=useState([]);
    const {categories}=useContext(CategoryContext);
    const navigate = useNavigate();

    async function fetchCountriesData(){
        const localData=JSON.parse(localStorage.getItem("countries"));
        if(localData){
            setCountries(localData);
            return;
        }
        const response=await axios.get("https://www.themealdb.com/api/json/v1/1/list.php?a=list");
        const data=response.data.meals;
        setCountries(data);
        localStorage.setItem("countries",JSON.stringify(countries));
    }

    useEffect(()=>{
        fetchCountriesData();
    },[])
    return (
        <>
            {/* Main Content */}
            <main className="flex-grow">
                {/* Hero Section */}
                <div className="pt-16">
                    <div
                        className="relative h-[600px] bg-cover bg-center bg-no-repeat"
                        style={{
                            backgroundImage:
                                `url(${HeroImage})`,
                        }}
                    >
                        <div className="absolute inset-0 bg-black/50" />
                        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
                            <div className="text-white max-w-2xl">
                                <h1 className="text-5xl font-bold mb-6">
                                    Discover Amazing Recipes
                                </h1>
                                <p className="text-xl mb-8">
                                    Find and cook delicious meals with our
                                    extensive collection of recipes from around
                                    the world.
                                </p>
                                <div className="flex space-x-4">
                                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition cursor-pointer" onClick={()=>setIsSearchOpen(!isSearchOpen)}>
                                        Explore Recipes
                                    </button>
                                    <button className="bg-white hover:bg-gray-200 text-gray-800 px-8 py-3 rounded-lg font-semibold transition cursor-pointer" onClick={()=>navigate('/About')}>
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Featured Categories */}
                    <div className="max-w-7xl mx-auto px-4 py-10">
                        <h2 className="text-3xl font-bold text-gray-800 mb-8">
                            Popular Country Meals🍽️
                        </h2>
                        <div className="w-full">
                            <RecipeCarousel Dataset={countries} delay={2500}/>
                        </div>
                    </div>
                    <div className="max-w-7xl mx-auto px-4 py-16">
                        <h2 className="text-3xl font-bold text-gray-800 mb-8">
                            All Meal Categories🍽️
                        </h2>
                        <div className="w-full">
                            <RecipeCarousel Dataset={categories} delay={2800}/>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Hero;
