import types from './snackbarActionTypes';

const opeanSnackbar = source => ({
  type: types.OPEN_SNACKBAR,
  payload: source,
});

const closeSnackbar = () => ({
  type: types.CLOSE_SNACKBAR,
});

const errorSnackbar = () => ({
  type: types.ERROR_SNACKBAR,
});

const infoSnackbar = () => ({
  type: types.INFO_SNACKBAR,
});

const successSnackbar = () => ({
  type: types.SUCCESS_SNACKBAR,
});

export default {
  opeanSnackbar,
  closeSnackbar,
  errorSnackbar,
  infoSnackbar,
  successSnackbar,
};
