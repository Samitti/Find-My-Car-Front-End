import axios from 'axios';
import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
} from './userTypes';

export const fetchUserRequest = () => ({
  type: FETCH_USER_REQUEST,
});

export const fetchUserSuccess = data => ({
  type: FETCH_USER_SUCCESS,
  payload: data,
});

export const fetchUserFailure = error => ({
  type: FETCH_USER_FAILURE,
  payload: error,
});

export const fetchUser = optionsList => dispatch => {
  dispatch(fetchUserRequest);
  axios.post(optionsList.url,
    {
      username: optionsList.user.username,
      password: optionsList.user.password,
    }).then(response => {
    const user = response.data;
    localStorage.setItem('jwtoken', response.data);
    dispatch(fetchUserSuccess(user));
  }).catch(error => {
    const errorMsg = error.message;
    dispatch(fetchUserFailure(errorMsg));
  });
};
