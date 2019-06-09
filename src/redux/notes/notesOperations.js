import axios from 'axios';

import actions from './notesActions';

const getNotes = () => dispatch => {
  dispatch(actions.fetchNotesRequest());

  axios
    .get('/notes')
    .then(({ data }) => {
      dispatch(actions.fetchNotesSuccess(data.notes));
    })
    .catch(error => dispatch(actions.fetchNotesError(error)));
};

const getNoteById = id => dispatch => {
  dispatch(actions.fetchNotesRequest());

  axios
    .get(`/notes/${id}`)
    .then(({ data }) => {
      dispatch(actions.fetchNotesSuccess(data.notes));
    })
    .catch(error => dispatch(actions.fetchNotesError(error)));
};

const updateNote = note => dispatch => {
  dispatch(actions.updateNoteRequest());

  axios
    .patch(`/notes/${note.id}`, {
      title: note.title || '',
      content: note.content || '',
    })
    .then(({ data }) => {
      console.log(data);
      dispatch(actions.updateNoteSuccess(data));
    })
    .catch(error => dispatch(actions.updateNoteError(error)));
};

const addNote = note => dispatch => {
  dispatch(actions.addNoteRequest());

  axios
    .post('/notes', note)
    .then(({ data }) => {
      dispatch(actions.addNoteSuccess(data));
    })
    .catch(error => dispatch(actions.addNoteError(error)));
};

const deleteNote = id => dispatch => {
  dispatch(actions.deleteNoteRequest());

  axios
    .delete(`/notes/${id}`)
    .then(() => {
      dispatch(actions.deleteNoteSuccess(id));
    })
    .catch(error => dispatch(actions.deleteNoteError(error)));
};

export default {
  getNotes,
  getNoteById,
  updateNote,
  addNote,
  deleteNote,
};
