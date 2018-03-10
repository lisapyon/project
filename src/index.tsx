import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router } from 'react-router'
import store from "./store";
import App from './App';
import {Provider} from "react-redux";
import createBrowserHistory from 'history/createBrowserHistory';
import {Routes} from "./Routes";
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const history = createBrowserHistory()

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Routes />
    </Router>
  </Provider>
  , document.getElementById('app')
);
