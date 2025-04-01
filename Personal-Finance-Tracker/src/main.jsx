import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import NumbersContextProvider from "./Contexts/NumbersContext.jsx";
import TransactionContextProvider from "./Contexts/TransactionContext.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <NumbersContextProvider>
            <TransactionContextProvider>
                <App />
            </TransactionContextProvider>
        </NumbersContextProvider>
    </StrictMode>
);
