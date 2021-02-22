import * as React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import CreateCar from '../redux/actions/addCarAction';
// import axios from 'axios';

export default function AddCar() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  // const onSubmit = data => {
  //   console.log(data.image[0]);
  //   dispatch(CreateCar(data));
  // };
  const onSubmit = data => {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('model', data.model);
    formData.append('price', data.price);
    formData.append('image', data.image[0]);
    dispatch(CreateCar(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <input name="name" type="text" ref={register} placeholder="Car Name" />
      <input name="model" type="text" ref={register} placeholder="Car Model" />
      <input name="price" type="number" ref={register} placeholder="Car Price" />
      <input name="image" type="file" accept="image/png, image/jpeg" ref={register} placeholder="Car Image" />

      <input type="submit" />
    </form>
  );
}
