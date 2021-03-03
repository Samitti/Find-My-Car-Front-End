import axios from 'axios';

const likeCar = data => {
  axios.post('https://car-api-final.herokuapp.com/api/v1/likes',
    {
      user_id: data.user_id,
      car_id: data.car_id,
    }).then(res => {
    console.log(res);
  }).catch(error => {
    console.log(error);
  });
};

export default likeCar;
