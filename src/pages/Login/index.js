import { Button } from '@material-ui/core';
import {
  Container,
  Titulo,
  InputContainer
} from './styles';
import {
  Input,
  InputLabel,
  InputAdornment
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { UserContext } from 'commom/context/user';
import { useContext } from 'react';

function Login() {
  const history = useHistory();
  const { name, setName, balance, setBalance } = useContext(UserContext);

  return (
    <Container>
      <Titulo>
        Insira o seu nome
      </Titulo>
      <InputContainer>
        <InputLabel>
          Nome
        </InputLabel>
        <Input
          value={name}
          onChange={event => setName && setName(event.target.value)}
          type="text"
        />
      </InputContainer>
      <InputContainer>
        <InputLabel>
          Saldo
        </InputLabel>
        <Input
          type="number"
          value={balance}
          onChange={event => setBalance && setBalance(event.target.value)}
          startAdornment={
            <InputAdornment position="start">
              R$
            </InputAdornment>
          }
        />
      </InputContainer>
      <Button
        disabled={name.length < 4}
        onClick={() => history.push('/feira')}
        variant="contained"
        color="primary"
      >
        Avançar
      </Button>
    </Container>
  )
};

export default Login;