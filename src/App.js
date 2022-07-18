import React from 'react';
import './App.css';
import Home from './scenes/Home';
import NavBar from './components/NavBar';
import Dashboard from './scenes/Dashboard';
import GlobalStyle from '../src/constants/globalStyles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { store } from '../src/app/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <AuthProvider>
      <GlobalStyle />
      <Provider store={store}>
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
      </Provider>
    </AuthProvider>
  );
}

export default App;
