import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom'
import Home from 'components/pages/Home';
import HotDeal from 'components/pages/HotDeal';
import ProductDetails from 'components/pages/ProductDetails';

import './sass/main.scss';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/hot-deals" component={HotDeal} />
      <Route exact path="/details/:id" component={ProductDetails}/>
    </Router>
  );
}

export default App;
