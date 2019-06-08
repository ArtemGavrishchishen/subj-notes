import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';

import { modalActions, modalSelectors } from '../../redux/modal';

import styles from './ModalNote.module.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: 'none',
    background: 'transparent',
    padding: '0',
  },
};

const INITIAL_STATE = {
  id: null,
  title: '',
  content: '',
};

class ModalNote extends Component {
  state = INITIAL_STATE;

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmitForm = e => {
    e.preventDefault();
  };

  render() {
    const { title, content } = this.state;
    const { modalIsOpen, toggleModal } = this.props;
    return (
      <Modal
        isOpen={modalIsOpen}
        ariaHideApp={false}
        onRequestClose={toggleModal}
        style={customStyles}
      >
        <section className={styles.editor}>
          <form className={styles.form} onSubmit={this.handleSubmitForm}>
            <h1 className={styles.title}>Update ToDo!</h1>

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
              Update
            </button>
          </form>
        </section>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  modalIsOpen: modalSelectors.modalIsOpen(state),
});
const mapDispatchToProps = {
  toggleModal: modalActions.toggleModal,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalNote);
