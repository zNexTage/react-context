import { Button, Snackbar, InputLabel, Select, MenuItem } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { useCartContext } from 'commom/context/cart';
import { usePaymentContext } from 'commom/context/payment';
import { UserContext } from 'commom/context/user';
import Produto from 'components/Produto';
import { useContext, useMemo, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Voltar, TotalContainer, PagamentoContainer } from './styles';

function Carrinho() {
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const { cart, totalPrice, purchase } = useCartContext();
  const {balance} = useContext(UserContext);
  const { paymentForm, paymentTypes, changePaymentForm } = usePaymentContext();

  const history = useHistory();

  // the calculation will only happen when the cart balance or total price changes.
  const totalCoast = useMemo(()=> balance - totalPrice, [balance, totalPrice]);

  const numberFormat = new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL' });

  return (
    <Container>
      <Voltar onClick={() => history.goBack()} />
      <h2>
        Carrinho
      </h2>
      {
        cart.map((item) => (
          <Produto
            {...item}
            key={item.id}
          />
        ))
      }
      <PagamentoContainer>
        <InputLabel> Forma de Pagamento </InputLabel>
        <Select
          value={paymentForm.id}
          onChange={(event) => {
            const paymentId = event.target.value;

            changePaymentForm(paymentId);
          }}
        >
          {paymentTypes.map((paymentType) => (
            <MenuItem key={paymentType.id} value={paymentType.id}>
              {paymentType.type}
            </MenuItem>
          ))}

        </Select>
      </PagamentoContainer>
      <TotalContainer>
        <div>
          <h2>Total no Carrinho: </h2>
          <span>{numberFormat.format(totalPrice)}</span>
        </div>
        <div>
          <h2> Saldo: </h2>
          <span>{numberFormat.format(balance)}</span>
        </div>
        <div>
          <h2> Saldo Total: </h2>
          <span>{numberFormat.format(totalCoast)}</span>
        </div>
      </TotalContainer>
      <Button
        disabled={totalCoast < 0 || cart.length === 0}
        onClick={() => {
          purchase();
          setOpenSnackbar(true);
        }}
        color="primary"
        variant="contained"
      >
        Comprar
      </Button>
      <Snackbar
        anchorOrigin={
          {
            vertical: 'top',
            horizontal: 'right'
          }
        }
        open={openSnackbar}
        onClose={() => setOpenSnackbar(false)}
      >
        <MuiAlert
          onClose={() => setOpenSnackbar(false)}
          severity="success"
        >
          Compra feita com sucesso!
        </MuiAlert>
      </Snackbar>
    </Container>
  )
}

export default Carrinho;