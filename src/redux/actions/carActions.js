import {
  FETCH_CARS_REQUEST,
  FETCH_CARS_SUCCESS,
  FETCH_CARS_FAILURE,
} from '../constants/carTypes';

export const fetchCarsRequest = () => ({
  type: FETCH_CARS_REQUEST,
});

export const fetchCarsSuccess = data => ({
  type: FETCH_CARS_SUCCESS,
  payload: data,
});

export const fetchCarsFailure = error => ({
  type: FETCH_CARS_FAILURE,
  payload: error,
});
