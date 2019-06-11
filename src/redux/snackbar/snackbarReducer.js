import { combineReducers } from 'redux';

import types from './snackbarActionTypes';

function snackbarIsOpenReducer(state = false, { type }) {
  switch (type) {
    case types.OPEN_SNACKBAR:
      return true;
    case types.CLOSE_SNACKBAR:
      return false;

    default:
      return state;
  }
}

function snackbarSourceReducer(state = null, { type, payload }) {
  switch (type) {
    case types.OPEN_SNACKBAR:
      return payload;
    case types.CLOSE_SNACKBAR:
      return null;

    default:
      return state;
  }
}

export default combineReducers({
  snackbarSource: snackbarSourceReducer,
  snackbarIsOpen: snackbarIsOpenReducer,
});
