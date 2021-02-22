const DefaultState = {
  loading: false,
  data: [],
  errorMsg: '',
};

const AddCarReducer = (state = DefaultState, action) => {
  switch (action.type) {
    case 'CAR_CREATE_LOADING':
      return {
        ...state,
        loading: true,
        errorMsg: '',
      };

    case 'CAR_CREATE_FAIL':
      return {
        ...state,
        loading: false,
        errorMsg: 'Unable to Add Car msgFrom:AddCarReducer',
      };

    case 'CAR_CREATE_SUCCESS':
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

export default AddCarReducer;
