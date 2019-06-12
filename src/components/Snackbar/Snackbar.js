import React from 'react';
import { connect } from 'react-redux';

import { snackbarSelectors } from '../../redux/snackbar';

import SnackbarWarning from './SnackbarWarning/SnackbarWarning';
import SnackbarSuccess from './SnackbarSuccess/SnackbarSuccess';
import SnackbarError from './SnackbarError/SnackbarError';
import SnackbarInfo from './SnackbarInfo/SnackbarInfo';

const Snackbar = ({ snackbarMark }) => {
  return (
    <>
      {snackbarMark === 'warning' && <SnackbarWarning />}
      {snackbarMark === 'success' && <SnackbarSuccess />}
      {snackbarMark === 'error' && <SnackbarError />}
      {snackbarMark === 'info' && <SnackbarInfo />}
    </>
  );
};

const mapStateToProps = state => ({
  snackbarIsOpen: snackbarSelectors.snackbarIsOpen(state),
  snackbarMark: snackbarSelectors.snackbarMark(state),
});

export default connect(
  mapStateToProps,
  null,
)(Snackbar);
