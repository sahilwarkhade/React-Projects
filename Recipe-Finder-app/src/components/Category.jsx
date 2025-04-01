import React, { useContext, useEffect, useState } from "react";
import Card from "./Card";
import { useLocation, useParams } from "react-router-dom";
import CategoryContext from "../Context/Recipe/CategoryContext";
import axios from "axios";

const Category = () => {
    const { categories } = useContext(CategoryContext);
    const [relatedMeals, setRelatedMeals] = useState([]);
    const param = useParams().id;
    const currCategory = categories.filter(
        (category) => category.strCategory.toLocaleLowerCase() == param
    );

    const location = useLocation();

    async function fetchData() {
        const url = location.pathname.includes("/area")
            ? `https://www.themealdb.com/api/json/v1/1/filter.php?a=${param}`
            : `https://www.themealdb.com/api/json/v1/1/filter.php?c=${param}`;
        const response = await axios.get(url);
        const resData = response.data.meals;
        setRelatedMeals(resData);
        console.log(resData);
    }

    useEffect(() => {
        fetchData();
    }, [param]);

    return (
        <div className="min-h-[100vh] max-w-7xl mx-auto p-6 pt-20">
            {
                !location.pathname.includes('/area') && 
                <div className="flex justify-between items-start gap-16">
                    <div>
                        <Card image={currCategory[0]?.strCategoryThumb} />
                    </div>
                    <div className="p-10 font-medium text-xl">
                        <h2 className="text-4xl font-bold text-gray-800 capitalize">
                            {param}
                        </h2>
                        <p className="py-7">
                            {currCategory[0]?.strCategoryDescription}
                        </p>
                    </div>
                </div>
            }

            <div>
                <h3 className="capitalize mt-10 text-3xl font-medium text-gray-800">
                    Related Meals to {param}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-3">
                    {relatedMeals?.map((el, index) => {
                        return (
                            <Card
                                key={index}
                                image={el.strMealThumb}
                                name={el.strMeal}
                                id={el.idMeal ? el.idMeal : el.idCategory}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Category;
