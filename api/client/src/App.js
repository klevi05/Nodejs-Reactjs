import './App.css';
import AddClient from './extends/AddClient.jsx';
import LogIn from './extends/LogIn';
import Home from './extends/Home'
import React from 'react';
import { BrowserRouter as Router, Switch , Route } from 'react-router-dom';

function App(){
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/addUser' component={AddClient} />
        <Route path='/logIn' component={LogIn} />
      </Switch>
    </Router>
  );
}

export default App;
