import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from '../src/hoc/Layout/Layout';
import BurgerBuilders from '../src/containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/" exact component={BurgerBuilders} />
          </Switch>
        </Layout>
      </div>
    )
  }
}

export default App