import axios from 'axios';
import {
  fetchCarsRequest,
  fetchCarsSuccess,
  fetchCarsFailure,
} from './actions/carActions';
import {
  fetchFavsRequest,
  fetchFavsSuccess,
  fetchFavsFailure,
} from './actions/favActions';
import {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure,
} from './actions/userActions';

export const fetchCars = optionsList => dispatch => {
  dispatch(fetchCarsRequest);
  axios.request(optionsList).then(response => {
    const cars = response;
    dispatch(fetchCarsSuccess(cars));
  }).catch(error => {
    const errorMsg = error.message;
    dispatch(fetchCarsFailure(errorMsg));
  });
};

export const fetchFavs = optionsList => dispatch => {
  dispatch(fetchFavsRequest);
  axios.request(optionsList).then(response => {
    const favs = response;
    dispatch(fetchFavsSuccess(favs));
  }).catch(error => {
    const errorMsg = error.message;
    dispatch(fetchFavsFailure(errorMsg));
  });
};

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
