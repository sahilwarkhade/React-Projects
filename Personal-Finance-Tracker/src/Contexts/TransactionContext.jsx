import React, { createContext, useState } from 'react'

export const TransactionContext=createContext();

const TransactionContextProvider = ({children}) => {
    let savedTransactions=JSON.parse(localStorage.getItem('transactions'))
    const[transactions,setTransactions]=useState(savedTransactions ? [...savedTransactions] : []);
    localStorage.setItem('transactions',JSON.stringify(transactions));
  return (
    <TransactionContext.Provider value={{transactions,setTransactions}}>
      {children}
    </TransactionContext.Provider>
  )
}

export default TransactionContextProvider
