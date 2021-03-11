import * as React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
// import UserCreate from '../../redux/actions/signInActions';
import './form.css';

export default function SignIn() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const history = useHistory();
  let loggedInUser = '';
  const login = () => {
    setTimeout(() => {
      loggedInUser = localStorage.getItem('jwtoken');
      if (loggedInUser) {
        history.push('/cars');
      } else {
        localStorage.setItem('signInErr', true);
        history.push('/SignIn');
      }
    }, 4000);
  };
  const onSubmit = data => {
    dispatch(UserCreate(data));
    localStorage.setItem('signInErr', '');
    login();
  };

  const erroMsg = (<h4>Not Valid Username or Password</h4>);
  return (
    <div className="signin">
      <p>Sin In</p>
      <form className="signin-form" onSubmit={handleSubmit(onSubmit)}>
        <input name="username" type="text" ref={register} placeholder="Username" />
        <input name="password" type="password" ref={register} placeholder="Password" />
        <input type="submit" />
      </form>
      <Link to="/" className="cancelSign">Cancel</Link>
      {localStorage.getItem('signInErr') ? erroMsg : ''}
    </div>
  );
}
