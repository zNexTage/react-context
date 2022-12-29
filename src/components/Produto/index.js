import { Container } from './styles';
import { memo } from 'react';
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { useCartContext } from 'commom/context/cart';


function Produto({
  name,
  photo,
  id,
  value,
  unity
}) {
  const { handleAddItem, handleRemoveItem, getProduct } = useCartContext();

  const product = getProduct(id);

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
          disabled={!product}
          color="secondary"
          onClick={() => handleRemoveItem(id)}
        >
          <RemoveIcon />
        </IconButton>
        {product?.quantity || 0}
        <IconButton
          color='primary'
          onClick={() => handleAddItem({ id, name, photo, value, unity })}>
          <AddIcon />
        </IconButton>
      </div>
    </Container>
  )
}

export default memo(Produto)