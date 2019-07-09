import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage, CartPage } from '../pages';
import ShopHeader from '../shop-header';

const App = () => {
    return (
        <div className="container">
            <ShopHeader />
            <Switch>
                <Route path="/3-React-ReStore/" component={HomePage} exact />
                <Route path="/3-React-ReStore/cart" component={CartPage} />
            </Switch>
        </div>
    );
};

export default App;
