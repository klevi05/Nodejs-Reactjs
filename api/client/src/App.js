import './App.css';
import AddClient from './extends/AddClient.jsx';
import LogIn from './extends/LogIn';
import Posts from './extends/Posts'
import Home from './extends/Home'
import React from 'react';
import { BrowserRouter as Router, Redirect, Switch , Route } from 'react-router-dom';

function App(){
  return (
    <Router>
      <Switch>
        <Route path='/' exact strict component={Home} />
        <Route path='/addUser' exact strict component={AddClient} />
        <Route path='/posts' exact strict component={Posts}/>
        <Redirect from='/posts' to='/logIn'/>
        <Route path='/logIn' exact strict component={LogIn} />
      </Switch>
    </Router>
  );
}

export default App;
