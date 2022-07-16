import React, { useEffect } from 'react';
import './App.css';
import Home from './scenes/Home';
import NavBar from './components/NavBar';
import Dashboard from './scenes/Dashboard';
import GlobalStyle from '../src/constants/globalStyles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { categories } from './constants/categories';
import axios from 'axios';

console.log(categories)

function App() {
  const language = 'en';

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
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
