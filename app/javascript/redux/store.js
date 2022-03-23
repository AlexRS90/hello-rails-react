import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import regardsReducer from './regardReducer'

const store = createStore(regardsReducer, applyMiddleware(logger, thunk))

export default store;
