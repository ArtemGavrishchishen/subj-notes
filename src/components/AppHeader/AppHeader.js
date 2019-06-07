import React from 'react';
import { connect } from 'react-redux';

import SignOutIcon from './SignOutIcon/SignOutIcon';

import { authActions, authSelectors } from '../../redux/auth';

import styles from './AppHeader.module.css';

const AppHeader = ({ isAuthenticated, signOut }) => (
  <header className={styles.header}>
    {isAuthenticated && (
      <div className={styles.signOut}>
        <SignOutIcon signOut={signOut} />
      </div>
    )}
  </header>
);

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

const mapDispatchToProps = {
  signOut: authActions.signOut,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppHeader);
