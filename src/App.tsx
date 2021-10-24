import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom'
import Home from 'components/pages/Home';
import HotDeal from 'components/pages/HotDeal';
import ProductDetails from 'components/pages/ProductDetails';
import Cart from 'components/pages/cart/Cart';
import Contact from 'components/pages/contact/Contact';
import './sass/main.scss';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/hot-deals" component={HotDeal} />
      <Route exact path="/details/:id" component={ProductDetails}/>
      <Route exact path="/cart" component={Cart}/>
      <Route exact path="/contact" component={Contact}/>
    </Router>
  );
}

export default App;
