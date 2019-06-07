import types from './notesActionTypes';

const fetchNotesRequest = () => ({
  type: types.FETCH_REQUEST,
});

const fetchNotesSuccess = notes => ({
  type: types.FETCH_SUCCESS,
  payload: notes,
});

const fetchNotesError = error => ({
  type: types.FETCH_ERROR,
  payload: error,
});

export default {
  fetchNotesRequest,
  fetchNotesSuccess,
  fetchNotesError,
};
