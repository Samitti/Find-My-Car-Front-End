import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { addMyCar } from '../redux/axiosRequests';
import './AddCar.css';

export default function AddCar() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const addData = useSelector(state => state.carList);
  const formData = new FormData();
  const loggedInUser = localStorage.getItem('jwtoken');

  const onImageChange = event => {
    formData.append('image', event.target.files[0]);
  };

  const onSubmit = data => {
    formData.append('name', data.name);
    formData.append('model', data.model);
    formData.append('price', data.price);
    dispatch(addMyCar(formData, loggedInUser));
  };

  return (
    <div className="add-car">
      <p>Add Car</p>
      <form className="add-car-form" onSubmit={handleSubmit(onSubmit)}>
        <input name="name" type="text" ref={register} placeholder="Car Name" />
        <input name="model" type="text" ref={register} placeholder="Car Model" />
        <input name="price" type="number" ref={register} placeholder="Car Price" />
        <input type="file" accept="image/*" multiple={false} onChange={onImageChange} ref={register} />
        <input type="submit" />
      </form>
      <Link to="/" className="cancelSign">Cancel</Link>
      <div>
        {addData.carAdded
          ? (
            <div>
              <p> Added Car</p>
              <a href="/">Go to Home Page</a>
            </div>
          ) : <p> </p>}
      </div>
    </div>
  );
}
