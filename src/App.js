import './App.css';
import React from 'react';

import {BrowserRouter, Route} from "react-router-dom";

import Card from './components/Card';
import Header from './components/Header';
import Modal from './components/Modal';
import Login from './pages/Login';
import Singup from './pages/Signup';
import TodoList from './pages/TodoList';
import Button from './elements/Button';
import Grid from './elements/Grid';
import Input from './elements/Input';
import star from './elements/star';


function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Route path="/Card" exact component={Card} />
        <Route path="/Header" exact component={Header} />
        <Route path="/Modal" exact component={Modal} />
        <Route path="/Login" exact component={Login} />
        <Route path="/Singup" exact component={Singup} />
        <Route path="/TodoList" exact component={TodoList} />
        <Route path="/Button" exact component={Button} />
        <Route path="/Grid" exact component={Grid} />
        <Route path="/Input" exact component={Input} />
        <Route path="/star" exact component={star} />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
