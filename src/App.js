import React from 'react';
import './App.css';
import Home from './scenes/Home';
import NavBar from './features/NavBar';
import Dashboard from './scenes/Dashboard';
import GlobalStyle from '../src/constants/globalStyles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
