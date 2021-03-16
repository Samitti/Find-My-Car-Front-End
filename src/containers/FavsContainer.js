import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import _ from 'lodash';
import { fetchCars, fetchFavs } from '../redux/axiosRequests';

import Toolbar from '../components/Toolbar/Toolbar';

function FavsContainer() {
  const dispatch = useDispatch();
  const carData = useSelector(state => state.carList);
  const favData = useSelector(state => state.favList);
  const loggedInUser = localStorage.getItem('jwtoken');
  const optionsList = {
    method: 'GET',
    url: 'https://sami-api-v1.herokuapp.com/cars',
    headers: {
      Authorization: `Bearer ${loggedInUser}`,
    },
  };

  useEffect(() => {
    dispatch(fetchCars(optionsList));
  }, []);

  const optionsListFav = {
    method: 'GET',
    url: 'https://sami-api-v1.herokuapp.com/favs',
    headers: {
      Authorization: `Bearer ${loggedInUser}`,
    },
  };

  useEffect(() => {
    dispatch(fetchFavs(optionsListFav));
  }, []);

  const freshData = carData.cars.length === 0 ? [] : carData.cars.data.cars;
  const favCarsAll = favData.favs.length === 0 ? [] : favData.favs.data.data;
  const favCarIds = favCarsAll.map(car => car.car_id);

  const myFav = freshData.map(car => (
    <article key={car.id} className="favItem">
      {favCarIds.includes(car.id)
        ? (
          <div className="carItem">
            <img className="caritemImgCar" src={car.image} alt={car.id} />
            <div className="carName">
              <h4>My Favorate</h4>
              <p className="car-name">
                <span>Car Name: </span>
                {car.name}
              </p>
              <p className="car-model">
                <span>Car Model: </span>
                {car.model}
              </p>
              <p className="car-price">
                <span>Car Price: $</span>
                {car.price}
              </p>
            </div>
          </div>
        )
        : '' }
    </article>
  ));

  const showData = () => {
    if (carData.loading) {
      return <p>Loading...</p>;
    }
    if (carData.error !== '') {
      return (
        <div>
          <p>{carData.error}</p>
          <p>Please login first!</p>
        </div>
      );
    }
    if (!_.isEmpty(carData)) {
      return (
        <div className="carListContainer">
          <div className="carLists">
            {myFav}
          </div>
        </div>
      );
    }

    return <p>Unable to get data!</p>;
  };

  return (
    <div>
      <Toolbar />
      {showData()}
    </div>
  );
}

export default FavsContainer;
