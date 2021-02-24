import * as React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import UserCreate from '../../redux/actions/signInActions';
import './form.css';

export default function SignIn() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const onSubmit = data => {
    dispatch(UserCreate(data));
  };

  return (
    <div className="signin">
      <p>Sin In</p>
      <form className="signin-form" onSubmit={handleSubmit(onSubmit)}>

        <input name="email" type="email" ref={register} placeholder="Email" />
        <input name="password" type="password" ref={register} placeholder="Password" />
        <input type="submit" />
      </form>
    </div>
  );
}
