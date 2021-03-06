import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { authReducer } from './auth';
import { modalReducer } from './modal';
import { snackbarReducer } from './snackbar';
import { notesReducer } from './notes';

const rootReducer = combineReducers({
  auth: authReducer,
  modal: modalReducer,
  snackbar: snackbarReducer,
  notes: notesReducer,
});

const middlewares = applyMiddleware(thunk);
const enhancer = composeWithDevTools(middlewares);

const store = createStore(rootReducer, enhancer);

export default store;
