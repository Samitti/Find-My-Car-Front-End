import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import GetCarList from '../actions/carActions';
import Toolbar from '../../components/Toolbar/Toolbar';
import '../../App.css';

const CarList = () => {
  const dispatch = useDispatch();
  const carList = useSelector(state => state.CarList.data);
  const loggedInUser = localStorage.getItem('jwtoken');

  const optionsList = {
    method: 'GET',
    url: 'http://localhost:4000/cars',
    headers: {
      Authorization: `Bearer ${loggedInUser}`,
    },
  };

  React.useEffect(() => {
    if (carList.length === 0) {
      dispatch(GetCarList(optionsList));
    }
  }, [dispatch]);

  localStorage.setItem('carsLocal', JSON.stringify(carList));
  const freshData = carList.length === 0 ? [] : carList.cars;
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
    if (carList.loading) {
      return <p>Loading...</p>;
    }

    if (!_.isEmpty(carList)) {
      return (
        <div className="carListContainer">
          <div className="carLists">
            {carElements}
          </div>
        </div>
      );
    }

    if (carList.errorMsg !== '') {
      return <p>{carList.errorMsg}</p>;
    }

    return <p>Unable to get data msgFrom:CarList-showData method</p>;
  };

  return (
    <div>
      <Toolbar />
      {showData()}
    </div>
  );
};

export default CarList;
