import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root-reducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const middleware = [
  logger,
  thunk
];

export const configureStore = (preloadedState = {}) => (
  createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(...middleware)
  )
);
