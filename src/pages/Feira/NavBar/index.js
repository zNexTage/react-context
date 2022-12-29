import { Nav } from './styles';
import { ReactComponent as Logo } from 'assets/logo.svg';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import { useCartContext } from 'commom/context/cart';

export default function NavBar() {
  const { totalQtd } = useCartContext();

  return (
    <Nav>
      <Logo />
      <IconButton
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