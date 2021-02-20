/* eslint-disable */
import React, { Component } from 'react'
import axios from 'axios';

export default class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      passwordConfirmation: '',
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

    
    const formData = new FormData();

    formData.append('email', email);
    formData.append('password', password);
    formData.append('password_confirmation', passwordConfirmation);

    fetch("http://localhost:3001/api/v1/users", {
        method: 'post',
        body: formData
    },
    { withCredentials: true }).then(response => {
      console.log('resgistration re', response);
    }).catch(error => {
      console.log('registration error', error);
    });
    
    // var session_url = 'http://localhost:3001/api/v1/users';
    // axios.post(session_url, {}, {
    //   auth: {
    //     email: email,
    //     password: password,
    //     password_confirmation: passwordConfirmation
    //   }
    // }).then(function(response) {
    //   console.log('Authenticated');
    // }).catch(function(error) {
    //   console.log('Error on Authentication');
    // });

  //   axios.post('http://localhost:3001/api/v1/users', {
  //     user: {
  //       email,
  //       password,
  //       passwordConfirmation,
  //     },
  //   },
  //   { withCredentials: true }).then(response => {
  //     console.log('resgistration re', response);
  //   }).catch(error => {
  //     console.log('registration error', error);
  //   });
}

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
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
            type="password"
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
            value={this.state.passwordConfirmation}
            onChange={this.handleChange}
            required
          />

          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}
