import axios from 'axios';

const UserCreate = data => async dispatch => {
  dispatch({
    type: 'USER_CREATE_LOADING',
  });

  axios.post('https://sami-api-v1.herokuapp.com//login',
    {
      username: data.username,
      password: data.password,
    }).then(response => {
    localStorage.setItem('jwtoken', response.data);
    dispatch({
      type: 'USER_CREATE_SUCCESS',
      payload: response.data,
      isAuthenticated: true,
    });
  }).catch(() => {
    dispatch({
      type: 'USER_CREATE__FAIL',
    });
  });
};

export default UserCreate;
