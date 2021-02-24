import * as React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import UserRegister from '../../redux/actions/signUpActions';
import './form.css';

// import Headers from "./Header";

export default function Registration() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  // const onSubmit = data => alert(JSON.stringify(data));
  const onSubmit = data => {
    dispatch(UserRegister(data));
  };

  return (
    <div className="signup">
      <p>Sign Up</p>
      <form className="signup-form" onSubmit={handleSubmit(onSubmit)}>

        <input name="email" type="email" ref={register} placeholder="Email" />
        <input name="password" type="password" ref={register} placeholder="Password" />
        <input name="passwordConfirmation" type="password" ref={register} placeholder="Confirm Password" />

        <input type="submit" />
      </form>
    </div>
  );
}
