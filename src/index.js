import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import Redirect from './components/redirect'
import ListScreen from './components/list'

import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path="/" component={App}/>
      <Route path='/redirect' component={Redirect}/>
      <Route path='/redirect/:access_token' component={Redirect}/>
      <Route path='/list' component={ListScreen}/>
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
