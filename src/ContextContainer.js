import React, { createContext, useState } from 'react'
const ctx = createContext();

const ContextContainer = ({ children }) => {

    const [currency, setCurrency] = useState('INR');
    return (
        <ctx.Provider value={{ currency, setCurrency }}>
            {children}
        </ctx.Provider>
    )
}
export default ContextContainer;
