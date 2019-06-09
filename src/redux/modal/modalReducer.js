import { combineReducers } from 'redux';

import types from './modalActionTypes';

function modalNoteReducer(state = null, { type, payload }) {
  switch (type) {
    case types.OPEN_MODAL:
      return payload;
    case types.CLOSE_MODAL:
      return null;

    default:
      return state;
  }
}

function modalReducer(state = false, { type }) {
  switch (type) {
    case types.OPEN_MODAL:
      return true;
    case types.CLOSE_MODAL:
      return false;

    default:
      return state;
  }
}

export default combineReducers({
  modalNote: modalNoteReducer,
  modalIsOpen: modalReducer,
});
