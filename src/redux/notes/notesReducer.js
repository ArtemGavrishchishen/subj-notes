import types from './notesActionTypes';

const INIT_NOTES = [];

function notesReducer(state = INIT_NOTES, { type, payload }) {
  switch (type) {
    case types.FETCH_SUCCESS:
      return payload;

    case types.FETCH_ERROR:
      return INIT_NOTES;

    case types.ADD_SUCCESS:
      return [...state, payload];

    case types.DELETE_SUCCESS:
      return state.filter(note => note.id !== payload);

    default:
      return state;
  }
}

export default notesReducer;
