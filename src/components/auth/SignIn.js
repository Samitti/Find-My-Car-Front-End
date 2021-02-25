import * as React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import UserCreate from '../../redux/actions/signInActions';
import './form.css';

export default function SignIn() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const history = useHistory();
  let loggedInUser = '';
  const login = () => {
    setTimeout(() => {
      loggedInUser = localStorage.getItem('user');
      if (loggedInUser) {
        history.push('/cars');
      } else {
        alert('Sin In Fail!');
      }
    }, 4000);
  };
  const onSubmit = data => {
    dispatch(UserCreate(data));
    login();
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
