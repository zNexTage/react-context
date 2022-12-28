import { createContext, useState } from 'react';

const CartContext = createContext();
CartContext.displayName = 'Carrinho de compras';

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    return (
        <CartContext.Provider value={{ cart, setCart }}>
            {children}
        </CartContext.Provider>
    )
};

export {
    CartContext,
    CartProvider
}



