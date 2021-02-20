import axios from 'axios';

const optionsList = {
  method: 'GET',
  url: 'https://sami-car-api-image.herokuapp.com/api/v1/cars',
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
