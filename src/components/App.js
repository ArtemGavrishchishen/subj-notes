import React from 'react';
import { connect } from 'react-redux';

import AppHeader from './AppHeader/AppHeader';
import Authentication from './Authentication/Authentication';
import NoteEditor from './NoteEditor/NoteEditor';
import NoteList from './NoteList/NoteList';

import { authActions, authSelectors } from '../redux/auth';

function App({ isAuthenticated }) {
  return (
    <>
      <AppHeader />
      <main>
        {!isAuthenticated ? (
          <Authentication />
        ) : (
          <>
            <NoteEditor />
            <NoteList />
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
  signIn: authActions.signOut,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
