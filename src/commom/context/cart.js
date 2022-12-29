import { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();
CartContext.displayName = 'Carrinho de compras';

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [totalQtd, setTotalQtd] = useState(0);


    /**
     * About add functions here:
     * > o Provider vai ter a responsabilidade de prover o contexto e de fazer manutenção no contexto! Não necessariamente colocar as funções no Provider vai estar sempre errado, pois nem sempre o nosso contexto será gigantesco, porém se o contexto começar a ficar muito complexo, você promete que vai criar um hook para poder separar a responsabilidade, beleza? ;)
     */
    return (
        <CartContext.Provider value={{ cart, setCart, totalQtd, setTotalQtd }}>
            {children}
        </CartContext.Provider>
    )
};

const useCartContext = () => {
    const { cart, setCart, totalQtd, setTotalQtd } = useContext(CartContext);

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
        setCart(changeQuantity(newProduct.id));
    }

    /**
     * Returns a product that is inside the cart; If the product is not already in the cart, return undefined
     * @param {*} productId The product id
     * @returns 
     */
    const getProduct = (productId) => {
        return cart.find(cartItem => cartItem.id === productId);
    }

    /**
     * Change the product quantity; When you want to decrease product quantity, you can pass -1.
     * @param {*} productId The product id; use to find the product inside the cart.
     * @param {*} value The quantity value; it's will be used to decrease or increase product quantity.
     * @returns An array of products with the product specified updated.
     */
    const changeQuantity = (productId, value = 1) => {
        return cart.map(item => {
            if (item.id === productId) {
                item.quantity += value;
            }

            return item;
        })
    }

    /**
     * Remove an item from cart
     * @param {*} productId 
     * @returns 
     */
    const handleRemoveItem = productId => {
        const product = getProduct(productId);

        if (!product || product?.quantity === 0) {
            return;
        }

        const isLastQuantity = product.quantity === 1;

        if (isLastQuantity) {
            //remove the product from cart;
            return setCart(cart => cart.filter(item => item.id !== productId));
        }

        return setCart(changeQuantity(productId, -1));
    }

    /**
     * Calculate the quantity total of the items in cart.
     */
    useEffect(() => {
        const totalQtd = cart.reduce((qtd, item) => {
            return qtd + item.quantity;
        }, 0);

        setTotalQtd(totalQtd);
    }, [cart, setTotalQtd]);


    return {
        cart,
        setCart,
        getProduct,
        handleAddItem,
        totalQtd,
        handleRemoveItem
    }
}

export {
    CartContext,
    CartProvider,
    useCartContext
}



