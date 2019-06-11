import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CancelToken } from 'axios';

import { notesOperations } from '../../redux/notes';
import { snackbarActions } from '../../redux/snackbar';

import styles from './NoteEditor.module.css';

const INITIAL_STATE = {
  title: '',
  content: '',
};

class NoteEditor extends Component {
  state = INITIAL_STATE;

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmitForm = e => {
    e.preventDefault();
    const { addNote, opeanSnackbar, closeSnackbar } = this.props;
    const source = CancelToken.source();

    opeanSnackbar(source);
    setTimeout(() => {
      closeSnackbar();
      addNote(this.state, source);
      this.setState({ ...INITIAL_STATE });
    }, 2000);
  };

  render() {
    const { title, content } = this.state;
    return (
      <section className={styles.editor}>
        <form className={styles.form} onSubmit={this.handleSubmitForm}>
          <h1 className={styles.title}>Add a new ToDo!</h1>

          <input
            className={styles.input}
            name="title"
            placeholder="Title"
            required
            value={title}
            onChange={this.handleChange}
          />
          <textarea
            className={styles.textarea}
            name="content"
            placeholder="Text"
            rows="3"
            value={content}
            onChange={this.handleChange}
          />
          <button className={styles.submit} type="submit">
            Add ToDo
          </button>
        </form>
      </section>
    );
  }
}

const mapDispatchToProps = {
  addNote: notesOperations.addNote,
  opeanSnackbar: snackbarActions.opeanSnackbar,
  closeSnackbar: snackbarActions.closeSnackbar,
};

export default connect(
  null,
  mapDispatchToProps,
)(NoteEditor);
