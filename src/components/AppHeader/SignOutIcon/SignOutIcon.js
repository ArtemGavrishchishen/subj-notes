import React from 'react';
import { ReactComponent as SignOut } from './assets/sign-out.svg';

import styles from './SignOutIcon.module.css';

const SignOutIcon = ({ signOut }) => (
  <>
    <button type="button" className={styles.signOut} onClick={signOut}>
      <SignOut />
    </button>
  </>
);

export default SignOutIcon;
