import { createStore, applyMiddleware, compose } from 'redux';

import createSagaMiddleware from 'redux-saga';
import createLogger from 'redux-logger';

import DevTools from 'components/modules/dev/DevTools';
import rootSaga from '../sagas';

import rootReducer from '../';

const sagaMiddleware = createSagaMiddleware();
const logger = createLogger({ collapsed: true });

const middlewares = [
  sagaMiddleware,
  logger,
].filter(Boolean);

const enhancer = compose(
  applyMiddleware(...middlewares),
  DevTools.instrument()
);

export default function configureStore(initialState) {

  const store = createStore(rootReducer, initialState, enhancer);

  // Enable Webpack hot module replacement for reducers
  if (module.hot) {
    module.hot.accept('../', () => {
      const nextRootReducer = require('../index').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  // Run sagas
  sagaMiddleware.run(rootSaga);

  // Enable access from global object
  window.__store = store;

  return store;
}
