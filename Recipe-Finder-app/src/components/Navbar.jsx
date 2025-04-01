import React, { useContext, useEffect, useState } from "react";
import { Search, Home, Info, Grid, UtensilsCrossed } from "lucide-react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import SearchContext from "../Context/SearchContext";
import CategoryContext from "../Context/Recipe/CategoryContext";
import axios from "axios";

export default function Navbar() {
    const { isSearchOpen, setIsSearchOpen } = useContext(SearchContext);
    const { categories, setCategories } = useContext(CategoryContext);
    const [recipeValue, setRecipeValue] = useState("");
    const navigate = useNavigate();

    async function fetchData() {
        const localData = JSON.parse(localStorage.getItem("categories"));
        if (localData) {
            setCategories(localData);
            return;
        }
        const response = await axios.get(
            "https://www.themealdb.com/api/json/v1/1/categories.php"
        );
        const data = response.data.categories;
        setCategories(data);
        localStorage.setItem("categories", JSON.stringify(categories));
    }
    useEffect(() => {
        fetchData();
    }, []);

    const handleKeyDown = (e) => {
        if (e.keyCode == "13") {
            if (!recipeValue) return;
            setRecipeValue("");
            setIsSearchOpen(false);
            navigate(`/recipe/${recipeValue}`);
        }
    };
    return (
        <>
            <nav className="bg-white shadow-md fixed w-full z-10">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <div className="flex items-center space-x-2">
                            <UtensilsCrossed className="h-6 w-6 text-orange-500" />
                            <span className="font-bold text-xl text-gray-800">
                                RecipeFinder
                            </span>
                        </div>

                        {/* Navigation Links */}
                        <div className="hidden md:flex items-center space-x-8">
                            <NavLink icon={<Home size={18} />} text="Home" />
                            <NavLink icon={<Info size={18} />} text="About" />
                            <CategoryDropdown Categories={categories} />
                            <NavLink
                                icon={<UtensilsCrossed size={18} />}
                                text="Find Recipe"
                                onClick={() => setIsSearchOpen(!isSearchOpen)}
                            />
                            <button
                                onClick={() => setIsSearchOpen(!isSearchOpen)}
                                className="p-2 hover:bg-gray-200 rounded-full transition cursor-pointer"
                            >
                                <Search className="h-5 w-5 text-gray-600" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Search Bar */}
                {isSearchOpen && (
                    <div className="absolute top-16 left-0 w-full bg-white shadow-md p-4 transition-all">
                        <div className="max-w-2xl mx-auto relative">
                            <input
                                onChange={(e) => setRecipeValue(e.target.value)}
                                // 13
                                onKeyDown={(e) => handleKeyDown(e)}
                                type="text"
                                placeholder="Search for recipes..."
                                className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
                            />
                            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                        </div>
                    </div>
                )}
            </nav>
            <Outlet />
        </>
    );
}

function NavLink({ icon, text, onClick }) {
    if (text == "Find Recipe") {
        return (
            <div
                onClick={onClick}
                className="cursor-pointer flex items-center space-x-1 px-3 py-2 rounded-lg transition text-gray-600 hover:text-orange-500 hover:bg-orange-100"
            >
                {icon}
                <span className="pxfont-medium">{text}</span>
            </div>
        );
    }
    return (
        <>
            <Link
                to={`${
                    text == "Home" ? "/" : text.toLowerCase().replace(" ", "-")
                }`}
                className="flex items-center space-x-1 px-3 py-2 rounded-lg transition text-gray-600 hover:text-orange-500 hover:bg-orange-100"
            >
                {icon}
                <span className="font-medium">{text}</span>
            </Link>
        </>
    );
}

function CategoryDropdown({ Categories }) {
    return (
        <div className="group relative flex items-center gap-1 cursor-pointer">
            <Grid size={18} />
            <span className="font-medium">Categories</span>
            <div className="invisible absolute left-[-25px] top-full mt-5 w-48 rounded-lg bg-white shadow-lg opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100 overflow-auto justify-center max-h-60">
                {Categories.length ? (
                    Categories.map((category, i) => (
                        <Link
                            key={i}
                            to={`/categories/${category.strCategory
                                .toLowerCase()
                                .replace(" ", "-")}`}
                            className="block px-4 py-2 hover:bg-gray-100"
                        >
                            {category.strCategory}
                        </Link>
                    ))
                ) : (
                    <p className="text-center py-2">No Category Found</p>
                )}
            </div>
        </div>
    );
}
