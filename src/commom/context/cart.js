import { createContext, useContext, useState } from 'react';

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

const useCartContext = () => {
    const { cart, setCart } = useContext(CartContext);

    /**
   * Add an item to the cart or, if the item is already in the cart, increase the 
   * quantity of this product;
   * @param {*} newProduct 
   * @returns 
   */
    const handleAddItem = (newProduct) => {
        const isCartItem = cart.some(cartItem => cartItem.id === newProduct.id);

        //the item is not in the cart?
        if (!isCartItem) {
            newProduct.quantity = 1;
            setCart([...cart, { ...newProduct }]);
            return;
        }

        // the item is already in the cart; we must increase the quantity.
        setCart(
            cart => cart.map((cartItem) => {
                if (cartItem.id === newProduct.id) {
                    cartItem.quantity += 1;
                }

                return cartItem;
            })
        )
    }

    /**
     * Returns a product that is inside the cart; If the product is not already in the cart, return undefined
     * @param {*} productId The product id
     * @returns 
     */
    const getProduct = (productId) => {
        return cart.find(cartItem => cartItem.id === productId);
    }

    return {
        cart,
        setCart,
        getProduct,
        handleAddItem
    }
}

export {
    CartContext,
    CartProvider,
    useCartContext
}



