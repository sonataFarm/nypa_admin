import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { configureStore } from './store/store';
import { ApolloProvider } from 'react-apollo';


import Root from './components/Root';

// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';
// Import Main styles for this application
import '../scss/style.scss'
// Temp fix for reactstrap
import '../scss/core/_dropdown-menu-right.scss'

// !!! testing and debugging
import APIUtil from './util/api_util';
import { createStudent } from './actions/student_actions';
window.APIUtil = APIUtil;
window.createStudent = createStudent;
// !!! end

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.store = store;
  const root = document.getElementById('root');

  ReactDOM.render(
    <Root store={store} />,
    root
  );
});
