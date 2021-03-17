import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { fetchFavs, fetchCars } from '../redux/axiosRequests';

import Toolbar from '../components/Toolbar/Toolbar';

function CarsContainer() {
  const dispatch = useDispatch();
  const carData = useSelector(state => state.carList);
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
  const carElements = freshData.map(car => (
    <article key={car.id} className="carItem">
      <img className="caritemImgCar" src={car.image} alt={car.id} />
      <div className="carName">
        <p>{car.name}</p>
        <Link to={`./cars/${car.id}`} car={car} id="viewLink">
          <span>VIEW CAR</span>
        </Link>
      </div>
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
            {carElements}
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

export default CarsContainer;
