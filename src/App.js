import './App.css';
import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from "./redux/configureStore";

import Header from './components/Header';
import Modal from './components/Modal';
import Login from './pages/Login';
import Singup from './pages/Signup';
import TodoList from './pages/TodoList';
import star from './elements/star';


function App() {
  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        <Route path="/header" exact component={Header} />
        <Route path="/modal" exact component={Modal} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Singup} />
        <Route path="/todoList" exact component={TodoList} />
        <Route path="/star" exact component={star} />
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
