import Carrinho from 'pages/Carrinho';
import Feira from 'pages/Feira';
import Login from 'pages/Login';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { UserProvider } from 'commom/context/user';
import { CartProvider } from 'commom/context/cart';

/**
 * Application routes
 * @returns 
 */
const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                {/* Provide context for login and feira pages */}
                <UserProvider>
                    <Route exact path={'/'}>
                        <Login />
                    </Route>
                    <CartProvider>
                        <Route path={'/feira'}>
                            <Feira />
                        </Route>
                    </CartProvider>
                </UserProvider>
                <Route path={'/carrinho'}>
                    <Carrinho />
                </Route>
            </Switch>
        </BrowserRouter>
    )
};

export default Router;