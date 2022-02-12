import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [search, setSearch] = useState('');

    return <GlobalContext.Provider value={{ search, setSearch }}>
        {children}
    </GlobalContext.Provider>
};