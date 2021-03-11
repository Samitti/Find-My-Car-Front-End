import axios from 'axios';
import {
  FETCH_CARS_REQUEST,
  FETCH_CARS_SUCCESS,
  FETCH_CARS_FAILURE,
} from './carTypes';

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

// export const fetchCars = optionsList => async dispatch => {
//   dispatch(fetchCarsRequest);

//   try {
//     const carData = await axios.request(optionsList);
//     dispatch(fetchCarsSuccess(carData));
//   } catch (error) {
//     const errorMsg = error.message;
//     dispatch(fetchCarsFailure(errorMsg));
//   }
// };
