import axios from 'axios';
// import { useHistory } from 'react-router-dom';

const likeCar = data => {
  // const history = useHistory();

  axios.post('https://car-api-rails.herokuapp.com/api/v1/likes',
    {
      user_id: data.user_id,
      car_id: data.car_id,
    }).then(res => {
    alert('Added to favorite');
    console.log(res);
  }).catch(error => {
    console.log(error);
  });
};

export default likeCar;
