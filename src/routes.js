import Carrinho from 'pages/Carrinho';
import Feira from 'pages/Feira';
import Login from 'pages/Login';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { UserProvider } from 'commom/context/user';
import { CartProvider } from 'commom/context/cart';
import { PaymentProvider } from 'commom/context/payment';

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
                        <PaymentProvider>
                            <Route path={'/feira'}>
                                <Feira />
                            </Route>
                            <Route path={'/carrinho'}>
                                <Carrinho />
                            </Route>
                        </PaymentProvider>
                    </CartProvider>
                </UserProvider>
            </Switch>
        </BrowserRouter>
    )
};

export default Router;