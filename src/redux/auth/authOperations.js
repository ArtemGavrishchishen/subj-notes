import axios from 'axios';

import actions from './authActions';
import axiosParams from '../../configs/axiosParams';

const signIn = userName => dispatch => {
  dispatch(actions.signInRequest());
  axiosParams.baseURL();

  axios
    .post('/tokens', userName)
    .then(({ data }) => {
      dispatch(actions.signInSuccess(data.token));
    })
    .catch(error => dispatch(actions.signInError(error)));
};

export default {
  signIn,
};
