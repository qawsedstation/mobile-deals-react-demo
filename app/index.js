import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import Immutable from 'immutable';

import configureStore from './redux/store/configureStore';
import routes from './routes';

const initialState = Immutable.Map();
export const store = configureStore(initialState);
window.store = store;


const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState(state) {
    return state.get('routing').toJS();
  },
});


ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      {routes}
    </Router>

  </Provider>
, document.getElementById('root'));
