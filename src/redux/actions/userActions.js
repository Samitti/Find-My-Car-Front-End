import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
} from '../constants/userTypes';

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
