import axios from 'axios';

const CreateCar = (formData, imageData) => async dispatch => {
  dispatch({
    type: 'CAR_CREATE_LOADING',
  });

  axios.post('https://car-api-final.herokuapp.com/api/v1/cars',
    {
      name: formData.name,
      model: formData.model,
      price: formData.price,
      image: imageData,
    }).then(response => {
    dispatch({
      type: 'CAR_CREATE_SUCCESS',
      payload: response,
    });
  }).catch(() => {
    dispatch({
      type: 'CAR_CREATE__FAIL',
    });
  });
};

export default CreateCar;
