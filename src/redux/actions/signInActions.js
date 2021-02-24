import axios from 'axios';

const UserCreate = data => async dispatch => {
  dispatch({
    type: 'USER_CREATE_LOADING',
  });

  axios.post('http://localhost:3001/api/v1/sessions',
    {
      email: data.email,
      password: data.password,
    }).then(response => {
    localStorage.setItem('user', response.data.email);
    console.log(response.data.email);
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

export default UserCreate;
