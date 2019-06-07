import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { authReducer } from './auth';
import { notesReducer } from './notes';

const rootReducer = combineReducers({
  auth: authReducer,
  notes: notesReducer,
});

const middlewares = applyMiddleware(thunk);
const enhancer = composeWithDevTools(middlewares);

const store = createStore(rootReducer, enhancer);

export default store;
