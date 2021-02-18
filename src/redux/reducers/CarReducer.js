const DefaultState = {
  loading: false,
  data: [],
  errorMsg: '',
};

const CarReducer = (state = DefaultState, action) => {
  switch (action.type) {
    case 'CAR_LOADING':
      return {
        ...state,
        loading: true,
        errorMsg: '',
      };

    case 'CAR_FAIL':
      return {
        ...state,
        loading: false,
        errorMsg: 'Unable to get the Car msgFrom:CarReducer',
      };

    case 'CAR_SUCCESS':
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

export default CarReducer;
