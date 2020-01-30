import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import rootReducer from '../src/reducers';

function configMiddleware() {
  const middlewares = applyMiddleware(thunkMiddleware, logger);
  return compose(middlewares);
}

const initialstate = {};
const middlewares = configMiddleware();
const store = createStore(rootReducer, initialstate, middlewares);

export default store;
