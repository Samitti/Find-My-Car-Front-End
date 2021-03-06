import * as React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import { Link, useHistory } from 'react-router-dom';
import { fetchUser } from '../../redux/axiosRequests';
import './form.css';

export default function SignIn() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const userData = useSelector(state => state.user);

  const history = useHistory();
  const login = () => {
    if (userData.loading) {
      return <p>Loading...</p>;
    }
    if (userData.error !== '') {
      return <h6>Please Check Username or Password</h6>;
    }
    if (!_.isEmpty(userData) && userData.logedIn) {
      history.push('/cars');
    }
    return <p />;
  };

  const onSubmit = data => {
    const optionsList = {
      method: 'POST',
      url: 'https://sami-api-v1.herokuapp.com/sessions',
      user: {
        username: data.username,
        password: data.password,
      },
    };
    dispatch(fetchUser(optionsList));
  };

  return (
    <div className="signin">
      <p>Sin In</p>
      <form className="signin-form" onSubmit={handleSubmit(onSubmit)}>
        <input name="username" type="text" ref={register} placeholder="Username" />
        <input name="password" type="password" ref={register} placeholder="Password" />
        <input type="submit" />
      </form>
      <Link to="/" className="cancelSign">Cancel</Link>
      <p>{login()}</p>
    </div>
  );
}
