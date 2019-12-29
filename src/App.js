import React, { Component } from 'react';

import Layout from '../src/components/Layout/Layout';
import BurgerBuilders from '../src/containers/BurgerBuilder/BurgerBuilder';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BurgerBuilders />
        </Layout>
      </div>
    )
  }
}

export default App