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

function snackbarMarkReducer(state = null, { type }) {
  switch (type) {
    case types.OPEN_SNACKBAR:
      return 'warning';
    case types.ERROR_SNACKBAR:
      return 'error';
    case types.INFO_SNACKBAR:
      return 'info';
    case types.SUCCESS_SNACKBAR:
      return 'success';
    case types.CLOSE_SNACKBAR:
      return null;

    default:
      return state;
  }
}

export default combineReducers({
  snackbarSource: snackbarSourceReducer,
  snackbarMark: snackbarMarkReducer,
  snackbarIsOpen: snackbarIsOpenReducer,
});
