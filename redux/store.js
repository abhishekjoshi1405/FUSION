import {combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {legacy_createStore as createStore} from 'redux';
import appReducer from './reducers';

const rootReducer = combineReducers({
  appReducer,
});
export const store = createStore(rootReducer, applyMiddleware(thunk));
