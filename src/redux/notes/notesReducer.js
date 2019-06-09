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

    case types.UPDATE_SUCCESS:
      return state.map(note => (note.id === payload.id ? payload : note));

    default:
      return state;
  }
}

export default notesReducer;
