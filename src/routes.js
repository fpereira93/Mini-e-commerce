import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Details from './pages/Details';

const Routes = () => {
  return (
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cart" component={Cart} />
        <Route path="/details/:product_id" component={Details} />
    </Switch>
  );
}

export default Routes;