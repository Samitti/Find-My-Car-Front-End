import axios from 'axios';

const optionsList = {
  method: 'POST',
  url: 'https://sami-car-api-image.herokuapp.com/api/v1/user',
};

const GetCarList = () => async dispatch => {
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
