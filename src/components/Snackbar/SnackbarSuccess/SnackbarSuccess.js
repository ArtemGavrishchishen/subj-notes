import React from 'react';
import { connect } from 'react-redux';

import { ReactComponent as Cancel } from '../assets/cancel.svg';

import { snackbarActions } from '../../../redux/snackbar';
import styles from './SnackbarSuccess.module.css';

const SnackbarSuccess = ({ closeSnackbar }) => {
  return (
    <div className={styles.snackbar}>
      <div className={styles.message}>This is a success message!</div>
      <div className={styles.action}>
        <button type="button" className={styles.cancel} onClick={closeSnackbar}>
          <Cancel />
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  closeSnackbar: snackbarActions.closeSnackbar,
};

export default connect(
  null,
  mapDispatchToProps,
)(SnackbarSuccess);
