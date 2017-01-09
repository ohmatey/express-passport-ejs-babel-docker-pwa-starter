import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router'

import Router from '../common/components/AppRouter'
import configureStore from '../common/store/configureStore'

const history = browserHistory

const initialState = window.__INITIAL_STATE__;
const store = configureStore(initialState);
const root = document.getElementById('main');


window.onload = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={browserHistory} />
    </Provider>, root
  );
};