import axios from 'axios';
import {
  FETCH_FAVS_REQUEST,
  FETCH_FAVS_SUCCESS,
  FETCH_FAVS_FAILURE,
} from './favTypes';

export const fetchFavsRequest = () => ({
  type: FETCH_FAVS_REQUEST,
});

export const fetchFavsSuccess = data => ({
  type: FETCH_FAVS_SUCCESS,
  payload: data,
});

export const fetchFavsFailure = error => ({
  type: FETCH_FAVS_FAILURE,
  payload: error,
});

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
