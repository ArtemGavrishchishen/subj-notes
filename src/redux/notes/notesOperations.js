import axios from 'axios';

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

  dispatch(snackbar.opeanSnackbar(source));

  setTimeout(() => {
    dispatch(snackbar.closeSnackbar());

    axios
      .post('/notes', note, {
        cancelToken: source.token,
      })
      .then(({ data }) => {
        dispatch(actions.addNoteSuccess(data));

        dispatch(snackbar.successSnackbar());
        setTimeout(() => {
          dispatch(snackbar.closeSnackbar());
        }, 2000);
      })
      .catch(error => {
        if (axios.isCancel(error)) {
          dispatch(snackbar.infoSnackbar());
          setTimeout(() => {
            dispatch(snackbar.closeSnackbar());
          }, 2000);
          return;
        }
        dispatch(actions.addNoteError(error));

        dispatch(snackbar.errorSnackbar());
        setTimeout(() => {
          dispatch(snackbar.closeSnackbar());
        }, 2000);
      });
  }, 2000);
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
