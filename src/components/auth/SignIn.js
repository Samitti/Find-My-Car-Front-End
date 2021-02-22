import * as React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import UserCreate from '../../redux/actions/signInActions';

// import Headers from "./Header";

export default function SignIn() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  // const onSubmit = data => alert(JSON.stringify(data));
  const onSubmit = data => {
    dispatch(UserCreate(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <input name="email" type="email" ref={register} placeholder="Email" />
      <input name="password" type="password" ref={register} placeholder="Password" />

      <input type="submit" />
    </form>
  );
}
