

const About = () => {
    return (
        <>
        <div className="max-w-6xl mx-auto p-6">
            {/* Heading */}
            <h1 className="text-4xl font-bold text-gray-800 mt-20">About Recipe Finder</h1>
            <p className="text-lg text-gray-600 mt-3">
                Discover, cook, and share your favorite recipes with ease!
            </p>

            {/* Section 1: Introduction */}
            <div className="mt-8 bg-orange-100 p-6 rounded-lg shadow">
                <h2 className="text-2xl font-semibold text-orange-700">Who We Are</h2>
                <p className="text-gray-700 mt-2">
                    Recipe Finder is your go-to platform for finding delicious and diverse recipes from around the world. Whether you're a seasoned chef or a beginner, our collection caters to all skill levels and tastes.
                </p>
            </div>

            {/* Section 2: Features */}
            <div className="mt-8">
                <h2 className="text-2xl font-semibold text-gray-800">Why Choose Us?</h2>
                <ul className="mt-4 space-y-4">
                    <li className="flex items-start space-x-3">
                        <span className="text-orange-500 text-xl">🍽</span>
                        <p className="text-gray-700">
                            **Diverse Recipes** – From Italian pasta to Asian fusion, explore thousands of recipes.
                        </p>
                    </li>
                    <li className="flex items-start space-x-3">
                        <span className="text-orange-500 text-xl">🔍</span>
                        <p className="text-gray-700">
                            **Smart Search** – Find the perfect recipe based on ingredients, cooking time, and cuisine.
                        </p>
                    </li>
                    <li className="flex items-start space-x-3">
                        <span className="text-orange-500 text-xl">👨‍🍳</span>
                        <p className="text-gray-700">
                            **Step-by-Step Guidance** – Easy-to-follow instructions and images for every dish.
                        </p>
                    </li>
                    <li className="flex items-start space-x-3">
                        <span className="text-orange-500 text-xl">❤️</span>
                        <p className="text-gray-700">
                            **Save & Share** – Bookmark your favorite recipes and share them with friends.
                        </p>
                    </li>
                </ul>
            </div>

            {/* Section 3: Join Us */}
            <div className="mt-8 bg-orange-100 p-6 rounded-lg shadow">
                <h2 className="text-2xl font-semibold text-orange-700">Join Our Community</h2>
                <p className="text-gray-700 mt-2">
                    Become a part of our growing food lovers’ community. Share your favorite recipes, get personalized recommendations, and enjoy cooking like never before.
                </p>
            </div>

            {/* Call-to-Action */}
            <div className="mt-8 text-center">
                <button className="bg-orange-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-orange-600 transition">
                    Explore Recipes
                </button>
            </div>
        </div>
        </>
    );
};

export default About;
