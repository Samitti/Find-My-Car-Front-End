import * as React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import UserRegister from '../../redux/actions/signUpActions';
import './form.css';

// import Headers from "./Header";

export default function Registration() {
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
        history.push('/SignUp');
      }
    }, 4000);
  };
  const onSubmit = data => {
    dispatch(UserRegister(data));
    login();
  };

  const erroMsg = (<h4>Not Valid Username or Password</h4>);
  return (
    <div className="signup">
      <p>Sign Up</p>
      <form className="signup-form" onSubmit={handleSubmit(onSubmit)}>
        <input name="username" type="text" ref={register} placeholder="Username" />
        <input name="password" type="password" ref={register} placeholder="Password" />
        <input type="submit" />
      </form>
      <Link to="/" className="cancelSign">Cancel</Link>
      {localStorage.getItem('signInErr') ? erroMsg : ''}
    </div>
  );
}
