import {
  FETCH_FAVS_REQUEST,
  FETCH_FAVS_SUCCESS,
  FETCH_FAVS_FAILURE,
} from '../constants/favTypes';

const initialState = {
  loading: true,
  favs: [],
  error: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FAVS_REQUEST:
      return {
        ...state,
        loading: true,
        error: '',
      };

    case FETCH_FAVS_SUCCESS:
      return {
        loading: false,
        favs: action.payload,
        error: '',
      };

    case FETCH_FAVS_FAILURE:
      return {
        loading: false,
        favs: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
