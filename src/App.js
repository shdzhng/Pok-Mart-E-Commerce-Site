import React, { useEffect } from 'react';
import './App.css';
import GlobalStyle from '../src/constants/globalStyles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';

import Home from './scenes/Home';
import NavBar from './components/NavBar';
import Dashboard from './scenes/Dashboard';
import Catalogue from './scenes/Catalogue';
import Item from './scenes/Item';
import ShoppingCart from './scenes/ShoppingCart';
import Orders from './scenes/Orders';
import Account from './scenes/Account';
import New from './scenes/New';

import BackgroundAnimation from './components/BackgroundAnimation';

function App() {
  return (
    <AuthProvider>
      <GlobalStyle />
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/catalogue">
            <Catalogue />
          </Route>
          <Route path="/item">
            <Item />
          </Route>
          <Route path="/shoppingCart">
            <ShoppingCart />
          </Route>
          <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/account">
            <Account />
          </Route>
          <Route path="/new">
            <New />
          </Route>
        </Switch>
        <BackgroundAnimation />
      </Router>
    </AuthProvider>
  );
}

export default App;
