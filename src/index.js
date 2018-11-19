import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from './ajax/ajax';
import {HashRouter} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import store from './store/index'

Component.prototype.$http = axios;
ReactDOM.render(<HashRouter><App/></HashRouter>, document.getElementById('root'));

serviceWorker.unregister();
