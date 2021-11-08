import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/Home'
import Product from './components/Products'
import { BrowserRouter as Router, Route } from 'react-router-dom'
ReactDOM.render(
  <Router>
    <Route exact path="/" component={Home} />
    <Route path="women/" render={() => <Product type="female" />} />
    <Route path="/men" render={() => <Product type="male" />}  />
  </Router>,
  document.getElementById('root')
);

