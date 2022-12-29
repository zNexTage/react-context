import { Nav } from './styles';
import { ReactComponent as Logo } from 'assets/logo.svg';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import { useCartContext } from 'commom/context/cart';
import { useHistory } from 'react-router-dom';

export default function NavBar() {
  const { totalQtd } = useCartContext();

  const history = useHistory();

  return (
    <Nav>
      <Logo />
      <IconButton
        onClick={() => history.push('/carrinho')}
        disabled={totalQtd === 0}>
        <Badge
          overlap="rectangular"
          color="primary"
          badgeContent={totalQtd}
        >
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    </Nav>
  )
}