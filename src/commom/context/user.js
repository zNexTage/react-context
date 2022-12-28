import { createContext, useState } from 'react';

const UserContext = createContext();

/**
 * Global state for user. 
 * @param {*} param0 
 * @returns 
 */
const UserProvider = ({ children }) => {
    const [name, setName] = useState('');
    const [balance, setBalance] = useState(0);

    return (
        <UserContext.Provider value={{
            name,
            setName,
            balance,
            setBalance
        }}>
            {children}

        </UserContext.Provider>
    )
};

export { UserContext, UserProvider };
