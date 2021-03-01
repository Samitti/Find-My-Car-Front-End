const DefaultState = {
  loading: false,
  data: [],
  errorMsg: '',
};

const FavoriteCarListReducer = (state = DefaultState, action) => {
  switch (action.type) {
    case 'FAV_LIST_LOADING':
      return {
        ...state,
        loading: true,
        errorMsg: '',
      };

    case 'FAV_LIST_FAIL':
      return {
        ...state,
        loading: false,
        errorMsg: 'Unable to get Favs msgFrom FavListReducer',
      };

    case 'FAV_LIST_SUCCESS':
      return {
        ...state,
        loading: false,
        errorMsg: '',
        data: action.payload,
      };

    default:
      return state;
  }
};

export default FavoriteCarListReducer;
