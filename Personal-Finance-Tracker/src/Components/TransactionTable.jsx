import React, { useContext, useEffect, useState } from "react";
import { MdEdit } from "react-icons/md";
import { NumbersContext } from "../Contexts/NumbersContext";
import { TransactionContext } from "../Contexts/TransactionContext";
import Modal from "./Modal";
import { IoCheckmarkDoneSharp } from "react-icons/io5";

const TransactionTable = () => {
    const { transactions, setTransactions } = useContext(TransactionContext);
    const totalIncome = transactions
        ?.filter((transaction) => transaction.type === "Income")
        .reduce((sum, transaction) => sum + transaction.amount, 0);

    const totalExpense = transactions
        ?.filter((transaction) => transaction.type === "Expense")
        .reduce((sum, transaction) => sum + transaction.amount, 0);

    const totalBalance = totalIncome - totalExpense;

    const { setBalance, setExpense, setIncome } = useContext(NumbersContext);

    const [edit, setEdit] = useState(false);
    const [transaction, setTransaction] = useState({});
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setExpense(totalExpense);
        setBalance(totalBalance);
        setIncome(totalIncome);
    }, [transactions]);

    const handleEdit = (id) => {
        setTransaction(id);
        setIsOpen(true);
    };

    function formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
        });
    }
    const handleEditTransaction = (editedTransaction) => {
        const filteredTransaction = transactions.filter(
            (transaction) => transaction.id != editedTransaction.id
        );
        editedTransaction.date = formatDate(editedTransaction.date);
        editedTransaction.amount = parseInt(editedTransaction.amount);
        setTransactions([...filteredTransaction, editedTransaction]);
    };
    return (
        <>
            <div className="bg-white shadow-lg rounded-lg p-6 max-w-[1440px] mx-auto mt-24">
                <div className="flex justify-between  mb-4">
                    <h2 className="text-xl font-semibold max-md:text-[22px]">
                        Recent Transactions
                    </h2>
                    <button
                        className="bg-blue-600 w-24 rounded-sm px-4 py-2 text-white font-medium flex items-center gap-2 cursor-pointer"
                        onClick={() => {
                            setEdit((prev) => !prev);
                        }}
                    >
                        {edit ? (
                            <IoCheckmarkDoneSharp title="Done" />
                        ) : (
                            <MdEdit title="Edit" />
                        )}

                        <p className="">{edit ? "Done" : "Edit"}</p>
                    </button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        {transaction.length==0 ? (
                            <p className="text-2xl text-center font-bold">Add Some Transactions</p>
                        ) : (
                            <>
                                <thead>
                                    <tr className="text-gray-600 text-sm uppercase border-b">
                                        <th className="py-3 text-left">Date</th>
                                        <th className="py-3 text-left">
                                            Description
                                        </th>
                                        <th className="py-3 text-left">Type</th>
                                        <th className="py-3 text-left">
                                            Amount
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {transactions?.map((transaction, index) => (
                                        <tr
                                            key={transaction.id}
                                            className={`border-b  ${
                                                edit
                                                    ? "cursor-pointer hover:bg-gray-100 transition"
                                                    : ""
                                            }`}
                                            onClick={(e) => {
                                                edit
                                                    ? handleEdit(transaction)
                                                    : null;
                                            }}
                                        >
                                            <td className="py-3">
                                                {transaction.date}
                                            </td>
                                            <td className="py-3">
                                                {transaction.description}
                                            </td>
                                            <td className="py-3">
                                                <span
                                                    className={`px-3 py-1 text-sm font-semibold rounded-full 
                      ${
                          transaction.type === "Income"
                              ? "bg-green-100 text-green-600"
                              : "bg-red-100 text-red-600"
                      }
                    `}
                                                >
                                                    {transaction.type}
                                                </span>
                                            </td>
                                            <td
                                                className={`py-3 font-semibold ${
                                                    transaction.type ===
                                                    "Income"
                                                        ? "text-green-600"
                                                        : "text-red-600"
                                                }`}
                                            >
                                                $
                                                {transaction.amount.toLocaleString()}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </>
                        )}
                    </table>
                </div>
            </div>
            <Modal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                onEdit={handleEditTransaction}
                transaction={transaction}
            />
        </>
    );
};

export default TransactionTable;
