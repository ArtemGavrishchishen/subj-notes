import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CancelToken } from 'axios';

import { ReactComponent as Delete } from './assets/delete.svg';
import { ReactComponent as Update } from './assets/update.svg';

import { notesSelectors, notesOperations } from '../../redux/notes';
import { modalActions } from '../../redux/modal';

import styles from './NoteList.module.css';

class NoteList extends Component {
  state = {};

  componentDidMount() {
    const { getNotes } = this.props;
    getNotes();
  }

  handleDeleteNote = id => {
    const { remove } = this.props;
    const source = CancelToken.source();

    remove(id, source);
  };

  render() {
    const { notes = [], openModal } = this.props;
    return (
      <section className={styles.notes}>
        <ul className={styles.list}>
          {notes.map(note => (
            <li key={note.id} className={styles.item}>
              <h3 className={styles.title}>{note.title}</h3>
              <div className={styles.content}>{note.content}</div>
              <ul className={styles.btnList}>
                <li className={styles.btnItem}>
                  <button
                    type="button"
                    className={styles.btn}
                    onClick={() => openModal(note)}
                  >
                    <Update />
                  </button>
                </li>
                <li className={styles.btnItem}>
                  <button
                    type="button"
                    className={styles.btn}
                    onClick={() => this.handleDeleteNote(note.id)}
                  >
                    <Delete />
                  </button>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  notes: notesSelectors.getNotes(state),
});

const mapDispatchToProps = {
  remove: notesOperations.deleteNote,
  getNotes: notesOperations.getNotes,
  openModal: modalActions.openModal,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NoteList);
