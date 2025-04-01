import React, { useContext, useState } from "react";
import { IoAdd } from "react-icons/io5";
import { TbWallet } from "react-icons/tb";
import Modal from "./Modal";
import { TransactionContext } from "../Contexts/TransactionContext";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { transactions, setTransactions } = useContext(TransactionContext);

    function formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
        });
    }

    const handleSaveTransaction = (newTransaction) => {
        console.log(newTransaction);
        newTransaction.date = formatDate(newTransaction.date);
        newTransaction.amount = parseInt(newTransaction.amount);

        setTransactions((prev) => [
          
            ...prev,
            newTransaction,
        ]);

        
    };
    return (
        <>
            <div className="flex h-18 justify-between px-32 py-4 shadow-lg items-center max-md:px-2">
                <div className="flex gap-4 ">
                    <TbWallet className="text-3xl text-blue-700 max-md:text-2xl" />
                    <h1 className="text-2xl font-bold max-md:text-[18px]">
                        Personal Finanace Tracker
                    </h1>
                </div>
                <div>
                    <button
                        className="bg-blue-600 rounded-sm px-4 py-1.5 text-white flex gap-2 text-center justify-center cursor-pointer font-medium"
                        onClick={() => {
                            setIsOpen(true);
                        }}
                    >
                        <IoAdd className="text-xl my-1 font-bold" />
                        <p className="max-md:hidden">Add Transaction</p>
                    </button>
                </div>
            </div>
            <Modal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                onSave={handleSaveTransaction}
            />
        </>
    );
};

export default Navbar;
