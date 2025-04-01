import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import { SearchContextProvider } from "./Context/SearchContext";
import { CategoryContextProvider } from "./Context/Recipe/CategoryContext";
import Category from "./components/Category";
import Meal from "./pages/Meal";

const App = () => {
    return (
        <>
            <SearchContextProvider>
                <CategoryContextProvider>
                    <Routes>
                        <Route path="/" element={<Navbar />}>
                            <Route index element={<Home />} />
                            <Route path="/About" element={<About />} />
                            <Route path="/categories/:id" element={<Category />} />
                            <Route path="/area/:id" element={<Category />} />
                            <Route path="/meal/:id" element={<Meal />} />
                            <Route path="/recipe/:id" element={<Meal />} />
                        </Route>
                    </Routes>
                    <Footer />
                </CategoryContextProvider>
            </SearchContextProvider>
        </>
    );
};

export default App;
