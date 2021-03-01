import axios from 'axios';

const GetFavoriteCarList = optionsList => async dispatch => {
  dispatch({
    type: 'FAV_LIST_LOADING',
  });

  axios.request(optionsList).then(response => {
    dispatch({
      type: 'FAV_LIST_SUCCESS',
      payload: response.data.data,
    });
  }).catch(() => {
    dispatch({
      type: 'FAV_LIST_FAIL',
    });
  });
};

export default GetFavoriteCarList;
