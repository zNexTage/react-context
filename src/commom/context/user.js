import { createContext, useState } from 'react';

const UserContext = createContext();

/**
 * Context object accepts a displayName string property. 
 * React DevTools uses this string to determine what to display for the context.
 * 
 * Basically, this property define the context name in react dev tools.
 * Ref: https://reactjs.org/docs/context.html#contextdisplayname
 */
UserContext.displayName = 'Usuário';


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
