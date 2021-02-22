import axios from 'axios';

const GetCarList = optionsList => async dispatch => {
  dispatch({
    type: 'CAR_LIST_LOADING',
  });

  axios.request(optionsList).then(response => {
    dispatch({
      type: 'CAR_LIST_SUCCESS',
      payload: response.data,
    });
  }).catch(() => {
    dispatch({
      type: 'CAR_LIST_FAIL',
    });
  });
};

export default GetCarList;
