const DefaultState = {
  loading: false,
  data: [],
  errorMsg: '',
};

const UserDestroyReducer = (state = DefaultState, action) => {
  switch (action.type) {
    case 'USER_DESTROY':
      return {
        ...state,
        loading: false,
        errorMsg: '',
      };

    default:
      return state;
  }
};

export default UserDestroyReducer;
