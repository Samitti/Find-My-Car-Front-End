import axios from 'axios';

const UserCreate = data => async dispatch => {
  dispatch({
    type: 'USER_CREATE_LOADING',
  });

  axios.post('https://car-api-final.herokuapp.com/api/v1/sessions',
    {
      email: data.email,
      password: data.password,
    }).then(response => {
    localStorage.setItem('user', response.data.id);
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
