import types from './authActionTypes';

const signInRequest = () => ({
  type: types.LOGIN_REQUEST,
});

const signInSuccess = data => ({
  type: types.LOGIN_SUCCESS,
  payload: data,
});

const signInError = error => ({
  type: types.LOGIN_ERROR,
  payload: error,
});

const signOut = () => ({
  type: types.SIGN_OUT,
});

export default {
  signInRequest,
  signInSuccess,
  signInError,
  signOut,
};
