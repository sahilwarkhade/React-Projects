import React, { useContext } from "react";
import Navbar from "./Components/Navbar";
import TransactionTable from "./Components/TransactionTable";
import Card from "./Components/Card";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";
import { NumbersContext } from "./Contexts/NumbersContext";

const App = () => {
    const { balance, expense, income, setBalance, setExpense, setIncome } =
        useContext(NumbersContext);
    return (
        <>
            <Navbar />
            <div className="flex justify-center items-center gap-24 mt-16 select-none flex-wrap">
                <Card
                    type={"Balance"}
                    amount={balance}
                    icon={
                        <RiMoneyDollarCircleFill
                            className={"text-5xl text-blue-600"}
                        />
                    }
                />
                <Card
                    type={"Income"}
                    amount={income}
                    icon={
                        <FaArrowTrendUp className={"text-5xl text-green-700"} />
                    }
                />
                <Card
                    type={"Expense"}
                    amount={expense}
                    icon={
                        <FaArrowTrendDown className={"text-5xl text-red-700"} />
                    }
                />
            </div>
            <TransactionTable
                setBalance={setBalance}
                setExpense={setExpense}
                setIncome={setIncome}
            />

        </>
    );
};

export default App;
