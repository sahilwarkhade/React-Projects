import React from "react";
import { useNavigate } from "react-router-dom";


const Card = ({ image, name, id }) => {
    const navigate=useNavigate();
    return (
        <div
            className={`flex flex-col justify-between ${
                name ? "h-85" : "h-72"
            } w-80 mt-5 overflow-hidden bg-amber-100 rounded-lg shadow-md m-10 cursor-pointer`}

            onClick={()=>navigate(`/meal/${id}`)}
        >
            <div className="h-[85%]">
                <img className="object-cover " src={image} />
            </div>
            {name && (
                <div className="h-[15%] bg-gray-700 space-y-0.5 text-start">
                    {
                        <p className="text-white px-2 text-lg font-semibold">
                            {name}
                        </p>
                    }
                </div>
            )}
        </div>
    );
};

export default Card;
