import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import ApiMiddleware from '../middlewares/api';
import * as reducers from '../reducers';

const middleware = [thunk, ApiMiddleware];

/* eslint-enable */
/* eslint-disable no-underscore-dangle */
const store = createStore(
  combineReducers({
    ...reducers,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware),
);

export default store;
