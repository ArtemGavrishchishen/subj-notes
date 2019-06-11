import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as Cancel } from './assets/cancel.svg';

import { snackbarActions, snackbarSelectors } from '../../redux/snackbar';
import styles from './Snackbar.module.css';

const cancellation = source => {
  source.cancel('Operation canceled by the user.');
};

const Snackbar = ({ closeSnackbar, source }) => {
  return (
    <div className={styles.snackbar}>
      <div className={styles.message}>This is a success message!</div>
      <div className={styles.action}>
        <button
          type="button"
          className={styles.undo}
          onClick={() => cancellation(source)}
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
  closeSnackbar: snackbarActions.closeSnackbar,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Snackbar);
