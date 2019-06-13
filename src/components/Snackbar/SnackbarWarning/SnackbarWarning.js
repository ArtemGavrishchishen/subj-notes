import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as Cancel } from '../assets/cancel.svg';

import { snackbarActions, snackbarSelectors } from '../../../redux/snackbar';
import styles from './SnackbarWarning.module.css';

const cancellation = (source, closeSnackbar) => {
  source.cancel('Operation canceled by the user.');

  closeSnackbar();
};

const SnackbarWarning = ({ closeSnackbar, source }) => {
  return (
    <div className={styles.snackbar}>
      <div className={styles.message}>This is a warning message!</div>
      <div className={styles.action}>
        <button
          type="button"
          className={styles.undo}
          onClick={() => cancellation(source, closeSnackbar)}
        >
          UNDO
        </button>
        <button type="button" className={styles.cancel} onClick={closeSnackbar}>
          <Cancel />
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  source: snackbarSelectors.snackbarSource(state),
});

const mapDispatchToProps = {
  closeSnackbar: snackbarActions.close,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SnackbarWarning);
