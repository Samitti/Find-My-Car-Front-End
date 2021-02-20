import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import GetCarList from '../actions/carActions';
import '../../App.css';

const CarList = () => {
  const dispatch = useDispatch();
  const carList = useSelector(state => state.CarList.data);

  React.useEffect(() => {
    if (carList.length === 0) {
      dispatch(GetCarList());
    }
  }, [dispatch]);

  const carElements = carList.map(car => (
    <article key={car.id} className="carItem">
      <p>{car.name}</p>
      <Link to={`./cars/${car.id}`} car={car} id="viewLink">
        <span>VIEW CAR</span>
      </Link>
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
      {showData()}
    </div>
  );
};

export default CarList;
