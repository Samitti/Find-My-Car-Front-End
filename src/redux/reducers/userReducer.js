import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
} from '../constants/userTypes';

const initialState = {
  loading: false,
  user: [],
  error: '',
  logedIn: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
        error: '',
        logedIn: false,
      };

    case FETCH_USER_SUCCESS:
      return {
        loading: false,
        user: action.payload,
        error: '',
        logedIn: true,
      };

    case FETCH_USER_FAILURE:
      return {
        loading: false,
        user: [],
        error: action.payload,
        logedIn: false,
      };

    default:
      return state;
  }
};

export default reducer;
