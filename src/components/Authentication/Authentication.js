import React, { Component } from 'react';

import SignInIcon from './SignInIcon/SignInIcon';

import styles from './Authentication.module.css';

export default class Authentication extends Component {
  state = { name: '' };

  handleChangeInput = e => {
    const { value } = e.target;
    this.setState({ name: value });
  };

  handleSubmitForm = e => {
    e.preventDefault();
    console.log(this.state);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({ name: '' });
  };

  render() {
    const { name } = this.state;
    return (
      <section className={styles.authentication}>
        <form className={styles.form} onSubmit={this.handleSubmitForm}>
          <input
            className={styles.input}
            type="text"
            value={name}
            onChange={this.handleChangeInput}
            placeholder="Your name"
          />

          <SignInIcon />
        </form>
      </section>
    );
  }
}
