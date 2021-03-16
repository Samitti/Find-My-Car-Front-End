import axios from 'axios';
import {
  fetchCarsRequest,
  fetchCarsSuccess,
  addCarsSuccess,
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

export const addFavCar = async (formData, loggedInUser) => {
  fetch('http://127.0.0.1:4000/favs', {
    method: 'POST',
    body: formData,
    headers: { Authorization: `Bearer ${loggedInUser}` },
  }).then(response => (!!response.ok)).catch(() => false);
};

export const addMyCar = (formData, loggedInUser) => dispatch => {
  dispatch(fetchCarsRequest);
  fetch('http://127.0.0.1:4000/cars', {
    method: 'POST',
    body: formData,
    headers: { Authorization: `Bearer ${loggedInUser}` },
  }).then(response => {
    if (response.ok) {
      dispatch(addCarsSuccess(response.data));
    }
  }).catch(error => {
    const errorMsg = error.message;
    dispatch(fetchCarsFailure(errorMsg));
  });
};
