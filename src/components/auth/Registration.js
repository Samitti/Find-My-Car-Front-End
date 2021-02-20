// import axios from 'axios';
/* eslint-disable */
import React, { Component } from 'react'

import axios from 'axios';
/* eslint-disable */
export default class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      password_confirmation: '',
      registrationErrors: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    const {
      email,
      password,
      passwordConfirmation,
    } = this.state;

    axios.post('https://sami-car-api-image.herokuapp.com/api/v1/sessions', {
      user: {
        email,
        password,
        passwordConfirmation,
      },
    },
    { withCredentials: true }).then(response => {
      console.log('resgistration re', response);
    }).catch(error => {
      console.log('registration error', error);
    });
    event.preventDefault();
  }

  handleChange(e) {
    this.state({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <input
            type="pasword"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
          <input
            type="password"
            name="passwordConfirmation"
            placeholder="Password Confirmation"
            value={this.state.pasword}
            onChange={this.handleChange}
            required
          />
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}
