import Carrinho from 'pages/Carrinho';
import Feira from 'pages/Feira';
import Login from 'pages/Login';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { UserProvider } from 'commom/context/user';

/**
 * Application routes
 * @returns 
 */
const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={'/'}>
                    <UserProvider>
                        <Login />
                    </UserProvider>
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