import { createStore, applyMiddleware, compose } from 'redux';

import createSagaMiddleware from 'redux-saga';

import rootSaga from '../sagas';

import rootReducer from '../';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [
  sagaMiddleware,
].filter(Boolean);

const enhancer = compose(
  applyMiddleware(...middlewares),
);

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer);

  // Run sagas
  sagaMiddleware.run(rootSaga);

  return store;
}
