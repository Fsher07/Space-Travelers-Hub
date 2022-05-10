import { combineReducers, legacy_createStore as createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { rocketsReducer } from './rockets';

const rootReducer = combineReducers({
  rockets: rocketsReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;
