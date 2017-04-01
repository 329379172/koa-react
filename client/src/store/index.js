import { createStore,applyMiddleware } from 'redux';
import homeReducer from '../reducers/index';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

const logger = createLogger();

let store = createStore(homeReducer, {home: {}}, applyMiddleware(thunk, logger));

export default store;