import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { createLogger } from 'redux-logger';

import rootReducer from './rootReducer';
import initialState from './initialState';

export default function configureStore() {
  const middlewares = [thunkMiddleware, reduxImmutableStateInvariant()];
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  if (process.env.NODE_ENV === 'development') {
    middlewares.push(createLogger({ collapsed: false }));
    return createStore(
      rootReducer,
      initialState,
      composeEnhancers(applyMiddleware(...middlewares)),
    );
  }

  return createStore(rootReducer, initialState, applyMiddleware(...middlewares));
}
