const snackbarTimeout = (dispatch, opeanSnackbar, closeSnackbar) => {
  dispatch(opeanSnackbar());

  setTimeout(() => {
    dispatch(closeSnackbar());
  }, 1000);
};

export default snackbarTimeout;
