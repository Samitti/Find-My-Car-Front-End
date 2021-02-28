import axios from 'axios';

const GetFavoriteCarList = optionsList => async dispatch => {
  dispatch({
    type: 'CAR_LIST_LOADING',
  });

  axios.request(optionsList).then(response => {
    dispatch({
      type: 'CAR_LIST_SUCCESS',
      payload: response.data.data,
    });
  }).catch(() => {
    dispatch({
      type: 'CAR_LIST_FAIL',
    });
  });
};

export default GetFavoriteCarList;
