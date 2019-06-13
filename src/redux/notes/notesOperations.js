import axios from 'axios';

import snackbarTimeout from '../../configs/snackbarTimeout';
import actions from './notesActions';
import snackbar from '../snackbar/snackbarActions';

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

const addNote = (note, source) => dispatch => {
  dispatch(actions.addNoteRequest());

  dispatch(snackbar.opean(source));

  setTimeout(() => {
    dispatch(snackbar.close());

    axios
      .post('/notes', note, {
        cancelToken: source.token,
      })
      .then(({ data }) => {
        dispatch(actions.addNoteSuccess(data));

        snackbarTimeout(dispatch, snackbar.success, snackbar.close);
      })
      .catch(error => {
        if (axios.isCancel(error)) {
          snackbarTimeout(dispatch, snackbar.info, snackbar.close);
          return;
        }
        dispatch(actions.addNoteError(error));

        snackbarTimeout(dispatch, snackbar.error, snackbar.close);
      });
  }, 2000);
};

const deleteNote = (id, source) => dispatch => {
  dispatch(actions.deleteNoteRequest());

  dispatch(snackbar.opean(source));

  setTimeout(() => {
    dispatch(snackbar.close());
    axios
      .delete(`/notes/${id}`, {
        cancelToken: source.token,
      })
      .then(() => {
        dispatch(actions.deleteNoteSuccess(id));

        snackbarTimeout(dispatch, snackbar.success, snackbar.close);
      })
      .catch(error => {
        if (axios.isCancel(error)) {
          snackbarTimeout(dispatch, snackbar.info, snackbar.close);
          return;
        }
        dispatch(actions.deleteNoteError(error));

        snackbarTimeout(dispatch, snackbar.error, snackbar.close);
      });
  }, 2000);
};

export default {
  getNotes,
  getNoteById,
  updateNote,
  addNote,
  deleteNote,
};
