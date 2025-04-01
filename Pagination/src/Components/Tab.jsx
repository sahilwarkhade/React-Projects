import React from "react";

const Tab = ({ Number, onclick, disable, currPage, children }) => {
    return (
        <button
            onClick={onclick}
            className={`h-10 w-10 border ml-5 cursor-pointer ${Number===currPage ? "bg-blue-600" : ""}`}
            disabled={disable}
        >
            {Number + 1 || children}
        </button>
    );
};

export default Tab;
