import {
  FETCH_FAVS_REQUEST,
  FETCH_FAVS_SUCCESS,
  FETCH_FAVS_FAILURE,
} from '../constants/favTypes';

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
