const DefaultState = {
  loading: false,
  data: [],
  errorMsg: '',
};

const UserCreateReducer = (state = DefaultState, action) => {
  switch (action.type) {
    case 'USER_CREATE_LOADING':
      return {
        ...state,
        loading: true,
        errorMsg: '',
      };

    case 'USER_CREATE_FAIL':
      return {
        ...state,
        loading: false,
        errorMsg: 'Unable to Create User msgFrom:CreateUserReducer',
      };

    case 'USER_CREATE_SUCCESS':
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

export default UserCreateReducer;
