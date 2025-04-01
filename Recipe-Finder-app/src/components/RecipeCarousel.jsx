import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Heart, Clock } from "lucide-react";
import dishImages from "../assets/dishImages";
import { useNavigate } from "react-router-dom";

const RecipeCarousel = ({ Dataset, delay }) => {
    const navigate = useNavigate();
    return (
        <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={4}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: delay }}
            breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 4 },
            }}
            className="rounded-xl h-full p-5"
        >
            {Dataset.map((element, index) => (
                <SwiperSlide
                    key={index}
                    className="cursor-pointer"
                    onClick={() =>
                        navigate(
                            `${
                                element.strArea
                                    ? "/area/" + element.strArea.toLowerCase()
                                    .replace(" ", "-")
                                    : "/categories/" +
                                      element.strCategory
                                          .toLowerCase()
                                          .replace(" ", "-")
                            }`
                        )
                    }
                >
                    <div className="bg-white shadow-md rounded-xl overflow-hidden h-full m-2">
                        <img
                            src={`${
                                element.strCategoryThumb
                                    ? element.strCategoryThumb
                                    : dishImages[index]
                            }`}
                            alt={`Dish ${index + 1}`}
                            className="w-full h-52 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold">
                                {element.strArea
                                    ? element.strArea
                                    : element.strCategory}
                            </h3>
                            <p className="text-gray-500 text-sm">
                                A tasty and healthy meal you'll love!
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default RecipeCarousel;
