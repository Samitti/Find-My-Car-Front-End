import {
  FETCH_CARS_REQUEST,
  FETCH_CARS_SUCCESS,
  ADD_CARS_SUCCESS,
  FETCH_CARS_FAILURE,
} from '../constants/carTypes';

const initialState = {
  loading: false,
  carAdded: false,
  cars: [],
  error: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CARS_REQUEST:
      return {
        ...state,
        loading: true,
        carAdded: false,
        error: '',
      };

    case FETCH_CARS_SUCCESS:
      return {
        loading: false,
        carAdded: false,
        cars: action.payload,
        error: '',
      };

    case ADD_CARS_SUCCESS:
      return {
        loading: false,
        carAdded: true,
        cars: action.payload,
        error: '',
      };

    case FETCH_CARS_FAILURE:
      return {
        loading: false,
        carAdded: false,
        cars: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
