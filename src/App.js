import './App.css';
import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from "./redux/configureStore";

import Login from './pages/Login';
import Singup from './pages/Signup';
import TodoList from './pages/TodoList';
import Main from './pages/Main';



function App() {
  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        <Route path="/" exact component={Main} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Singup} />
        <Route path="/todoList" exact component={TodoList} />
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
