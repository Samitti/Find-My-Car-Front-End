import axios from 'axios';
import {
  FETCH_CARS_REQUEST,
  FETCH_CARS_SUCCESS,
  FETCH_CARS_FAILURE,
} from './carTypes';

export const fetchCarsRequest = () => ({
  type: FETCH_CARS_REQUEST,
});

export const fetchCarsSuccess = cars => ({
  type: FETCH_CARS_SUCCESS,
  payload: cars,
});

export const fetchCarsFailure = error => ({
  type: FETCH_CARS_FAILURE,
  payload: error,
});

export const fetchCars = () => dispatch => {
  dispatch(fetchCarsRequest);
  axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      const cars = response.data;
      dispatch(fetchCarsSuccess(cars));
    })
    .catch(error => {
      const errorMsg = error.message;
      dispatch(fetchCarsFailure(errorMsg));
    });
};
