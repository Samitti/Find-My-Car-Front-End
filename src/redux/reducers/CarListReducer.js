const DefaultState = {
  loading: false,
  data: [],
  errorMsg: '',
};

const CarListReducer = (state = DefaultState, action) => {
  switch (action.type) {
    case 'CAR_LIST_LOADING':
      return {
        ...state,
        loading: true,
        errorMsg: '',
      };

    case 'CAR_LIST_FAIL':
      return {
        ...state,
        loading: false,
        errorMsg: 'Unable to get Cars msgFrom CarListReducer',
      };

    case 'CAR_LIST_SUCCESS':
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

export default CarListReducer;
