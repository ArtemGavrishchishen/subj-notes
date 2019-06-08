import axios from 'axios';

const baseURL = () => {
  axios.defaults.baseURL = 'http://159.89.96.181/api/v1';
};

const setToken = ({ token }) => {
  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    axios.defaults.headers.common.Authorization = null;
  }
};

export default {
  baseURL,
  setToken,
};
