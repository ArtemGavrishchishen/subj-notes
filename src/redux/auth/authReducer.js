import { combineReducers } from 'redux';

import types from './authActionTypes';

const INIT_AUTH = {
  token: '',
  isAuthenticated: false,
};

function tokenReducer(state = INIT_AUTH.token, { type, payload }) {
  switch (type) {
    case types.LOGIN_SUCCESS:
      return payload;

    case types.SIGN_OUT:
    case types.LOGIN_ERROR:
      return INIT_AUTH.token;

    default:
      return state;
  }
}

function isAuthenticatedReducer(state = INIT_AUTH.isAuthenticated, { type }) {
  switch (type) {
    case types.LOGIN_SUCCESS:
      return true;

    case types.SIGN_OUT:
    case types.LOGIN_ERROR:
      return INIT_AUTH.isAuthenticated;

    default:
      return state;
  }
}

export default combineReducers({
  token: tokenReducer,
  isAuthenticated: isAuthenticatedReducer,
});
