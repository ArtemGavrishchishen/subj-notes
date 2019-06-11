import types from './snackbarActionTypes';

const opeanSnackbar = source => ({
  type: types.OPEN_SNACKBAR,
  payload: source,
});

const closeSnackbar = () => ({
  type: types.CLOSE_SNACKBAR,
});

export default { opeanSnackbar, closeSnackbar };
