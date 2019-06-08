import React, { Component } from 'react';
import { connect } from 'react-redux';

import { notesOperations } from '../../redux/notes';

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
    const { addNote } = this.props;

    addNote(this.state);
    this.setState({ ...INITIAL_STATE });
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
};

export default connect(
  null,
  mapDispatchToProps,
)(NoteEditor);
