import { Container } from './styles';
import { memo, useContext } from 'react';
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { CartContext } from 'commom/context/cart';


function Produto({
  name,
  photo,
  id,
  value,
  unity
}) {
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

  return (
    <Container>
      <div>
        <img
          src={`/assets/${photo}.png`}
          alt={`foto de ${name}`}
        />
        <p>
          {name} - R$ {value?.toFixed(2)} <span>Kg</span>
        </p>
      </div>
      <div>
        <IconButton
          color="secondary"
        >
          <RemoveIcon />
        </IconButton>
        <IconButton onClick={() => handleAddItem({ id, name, photo, value, unity })}>
          <AddIcon />
        </IconButton>
      </div>
    </Container>
  )
}

export default memo(Produto)