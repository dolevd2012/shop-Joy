import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/Home'
import Product from './components/Products'
import { BrowserRouter as Router, Route } from 'react-router-dom'
ReactDOM.render(
  <Router>
    <Route exact path="https://shopandjoy.netlify.app/women" render={() => <Product type="female" />} />
    <Route exact path="https://shopandjoy.netlify.app/women" render={() => <Product type="female" />} />
    <Route exact path="/men" render={() => <Product type="male" />}  />
    <Route exact path="/women" component={Home} />
  </Router>,
  document.getElementById('root')
);

