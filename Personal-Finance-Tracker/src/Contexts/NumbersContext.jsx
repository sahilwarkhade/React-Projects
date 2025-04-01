import { createContext, useState } from "react"

export const NumbersContext= createContext();

const NumbersContextProvider = ({children}) => {
  const[balance,setBalance]=useState(0);
  const[expense,setExpense]=useState(0);
  const[income,setIncome]=useState(0);
  return (
    <NumbersContext.Provider value={{balance,expense,income,setBalance,setExpense,setIncome}}>
      {children}
    </NumbersContext.Provider>
  )
}

export default NumbersContextProvider;
