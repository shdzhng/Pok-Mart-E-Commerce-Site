import React from 'react';
import './App.css';
import Home from './scenes/Home';
import NavBar from './components/NavBar';
import Dashboard from './scenes/Dashboard';
import GlobalStyle from '../src/constants/globalStyles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import axios from 'axios';

function App() {
  const reqBody = {};

  const getData = async () => {
    await fetch(
      'https://cors-anywhere.herokuapp.com/pokeapi.salestock.net/api/v2//pokemon?limit=1&offset=134',
      {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        method: 'get',
        // body: JSON.stringify(reqBody),
      }
    ).then((res) => {
      console.log(res);
    });
  };

  getData();

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
