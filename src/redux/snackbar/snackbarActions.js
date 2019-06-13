import types from './snackbarActionTypes';

const opean = source => ({
  type: types.OPEN_SNACKBAR,
  payload: source,
});

const close = () => ({
  type: types.CLOSE_SNACKBAR,
});

const error = () => ({
  type: types.ERROR_SNACKBAR,
});

const info = () => ({
  type: types.INFO_SNACKBAR,
});

const success = () => ({
  type: types.SUCCESS_SNACKBAR,
});

export default {
  opean,
  close,
  error,
  info,
  success,
};
