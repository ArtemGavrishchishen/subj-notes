import React, { Component } from 'react';

import SignInIcon from './SignInIcon/SignInIcon';

import styles from './Authentication.module.css';

export default class Authentication extends Component {
  state = { userName: '' };

  handleChangeInput = e => {
    const { value } = e.target;
    this.setState({ userName: value });
  };

  handleSubmitForm = e => {
    e.preventDefault();
    const { signIn } = this.props;
    signIn(this.state);

    this.resetForm();
  };

  resetForm = () => {
    this.setState({ userName: '' });
  };

  render() {
    const { userName } = this.state;
    return (
      <section className={styles.authentication}>
        <form className={styles.form} onSubmit={this.handleSubmitForm}>
          <input
            className={styles.input}
            type="text"
            value={userName}
            required
            onChange={this.handleChangeInput}
            placeholder="Your name"
          />

          <SignInIcon />
        </form>
      </section>
    );
  }
}
