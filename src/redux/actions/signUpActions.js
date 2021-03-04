import axios from 'axios';

const UserRegister = data => async dispatch => {
  dispatch({
    type: 'USER_CREATE_LOADING',
  });

  axios.post('https://sami-api-v1.herokuapp.com//users',
    {
      username: data.username,
      password: data.password,
    }).then(response => {
    localStorage.setItem('jwtoken', response.data);
    dispatch({
      type: 'USER_CREATE_SUCCESS',
      payload: response.data,
    });
  }).catch(() => {
    dispatch({
      type: 'USER_CREATE__FAIL',
    });
  });
};

export default UserRegister;
