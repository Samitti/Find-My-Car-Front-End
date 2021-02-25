import React, { Component } from 'react';
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
      featuredImage: null,
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onImageChange = event => {
    this.setState({ featuredImage: event.target.files[0] });
  };

  handleSubmit = event => {
    event.preventDefault();
    const {
      name,
      model,
      price,
      featuredImage,
    } = this.state;
    const formData = new FormData();
    formData.append('name', name);
    formData.append('model', model);
    formData.append('price', price);
    formData.append('featured_image', featuredImage);
    fetch('https://car-api-final.herokuapp.com/api/v1/cars', {
      method: 'POST',
      body: formData,
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
      </div>
    );
  }
}

export default AddCar;
