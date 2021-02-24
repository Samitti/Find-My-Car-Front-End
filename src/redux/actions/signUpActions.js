import axios from 'axios';

const UserRegister = data => async dispatch => {
  dispatch({
    type: 'USER_CREATE_LOADING',
  });

  axios.post('http://localhost:3001/api/v1/users',
    {
      email: data.email,
      password: data.password,
      password_confirmation: data.passwordConfirmation,
    }).then(response => {
    localStorage.setItem('user', response.data);
    dispatch({
      type: 'USER_CREATE_SUCCESS',
      payload: response,
    });
  }).catch(() => {
    dispatch({
      type: 'USER_CREATE__FAIL',
    });
  });
};

export default UserRegister;
