import React from 'react';
import { connect } from 'react-redux';

import ModalNote from './ModalNote/ModalNote';
import AppHeader from './AppHeader/AppHeader';
import Authentication from './Authentication/Authentication';
import NoteEditor from './NoteEditor/NoteEditor';
import NoteList from './NoteList/NoteList';
import Snackbar from './Snackbar/Snackbar';

import { authOperations, authSelectors } from '../redux/auth';

function App({ isAuthenticated, signIn }) {
  return (
    <>
      <ModalNote />
      <AppHeader />
      <main>
        {!isAuthenticated ? (
          <Authentication signIn={signIn} />
        ) : (
          <>
            <NoteEditor />
            <NoteList />
            <Snackbar />
          </>
        )}
      </main>
    </>
  );
}

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

const mapDispatchToProps = {
  signIn: authOperations.signIn,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
