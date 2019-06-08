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

const addNoteRequest = () => ({
  type: types.ADD_REQUEST,
});

const addNoteSuccess = note => ({
  type: types.ADD_SUCCESS,
  payload: note,
});

const addNoteError = error => ({
  type: types.ADD_ERROR,
  payload: error,
});

const deleteNoteRequest = () => ({
  type: types.DELETE_REQUEST,
});

const deleteNoteSuccess = id => ({
  type: types.DELETE_SUCCESS,
  payload: id,
});

const deleteNoteError = error => ({
  type: types.DELETE_ERROR,
  payload: error,
});

const updateNoteRequest = () => ({
  type: types.UPDATE_REQUEST,
});

const updateNoteSuccess = note => ({
  type: types.UPDATE_SUCCESS,
  payload: note,
});

const updateNoteError = error => ({
  type: types.UPDATE_ERROR,
  payload: error,
});

export default {
  fetchNotesRequest,
  fetchNotesSuccess,
  fetchNotesError,
  addNoteRequest,
  addNoteSuccess,
  addNoteError,
  deleteNoteRequest,
  deleteNoteSuccess,
  deleteNoteError,
  updateNoteRequest,
  updateNoteSuccess,
  updateNoteError,
};
