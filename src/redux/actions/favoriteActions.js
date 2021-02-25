import axios from 'axios';

const GetFavoriteCarList = () => async dispatch => {
  dispatch({
    type: 'CAR_LIST_LOADING',
  });

  axios.get('https://car-api-rails.herokuapp.com/api/v1/likes').then(response => {
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
