import React, {createContext, useState } from 'react'

const SearchContext=createContext();
export const SearchContextProvider = ({children}) => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
  return (
    <SearchContext.Provider value={{isSearchOpen,setIsSearchOpen}}>
      {children}
    </SearchContext.Provider>
  )
}

export default SearchContext;
