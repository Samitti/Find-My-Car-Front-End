import {
  FETCH_CARS_REQUEST,
  FETCH_CARS_SUCCESS,
  FETCH_CARS_FAILURE,
} from './carTypes';

const initialState = {
  loading: false,
  cars: [],
  error: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CARS_REQUEST:
      return {
        ...state,
        loading: true,
        error: '',
      };

    case FETCH_CARS_SUCCESS:
      return {
        loading: false,
        cars: action.payload,
        error: '',
      };

    case FETCH_CARS_FAILURE:
      return {
        loading: false,
        cars: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
