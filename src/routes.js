import Carrinho from 'pages/Carrinho';
import Feira from 'pages/Feira';
import Login from 'pages/Login';
import { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { UserContext } from 'commom/context/user';

const Router = () => {
    const [name, setName] = useState('');
    const [balance, setBalance] = useState(0);

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={'/'}>
                    <UserContext.Provider value={{ name, setName, balance, setBalance }}>
                        <Login />
                    </UserContext.Provider>
                </Route>
                <Route path={'/feira'}>
                    <Feira />
                </Route>
                <Route path={'/carrinho'}>
                    <Carrinho />
                </Route>
            </Switch>
        </BrowserRouter>
    )
};

export default Router;