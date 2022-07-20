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
            <Catalogue />
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
