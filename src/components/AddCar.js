import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './AddCar.css';
// import { useForm } from 'react-hook-form';
// import { useDispatch } from 'react-redux';
// import CreateCar from '../redux/actions/addCarAction';
// import axios from 'axios';
/* eslint-disable */
class AddCar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      model: '',
      price: '',
      image: null,
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onImageChange = event => {
    this.setState({ image: event.target.files[0] });
  };

  handleSubmit = event => {
    event.preventDefault();
    const {
      name,
      model,
      price,
      image,
    } = this.state;
    const formData = new FormData();
    formData.append('name', name);
    formData.append('model', model);
    formData.append('price', price);
    formData.append('image', image);
    const loggedInUser = localStorage.getItem('jwtoken');
    console.log(image);

    fetch('https://sami-api-v1.herokuapp.com//cars', {
      method: 'POST',
      body: formData,
      headers: {"Authorization" : `Bearer ${loggedInUser}`}
    })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="add-car">
        <p>Add Car</p>
      <form className="add-car-form" onSubmit={this.handleSubmit}>
        <input name="name" type="text" value={this.state.name} onChange={this.handleChange} placeholder="Car Name" />
        <input name="model" type="text" value={this.state.model} onChange={this.handleChange} placeholder="Car Model" />
        <input name="price" type="number" value={this.state.price} onChange={this.handleChange} placeholder="Car Price" />
        <input type="file" accept="image/*" multiple={false} onChange={this.onImageChange} />
        <input type="submit" />
      </form>
      <Link to="/" className="cancelSign">Cancel</Link>
      </div>
    );
  }
}

export default AddCar;
