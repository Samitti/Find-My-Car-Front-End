import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import GetCarList from '../actions/carActions';

const Car = props => {
  const { match } = props;
  const dispatch = useDispatch();
  const gotId = match.params.id;
  const gotIdInt = parseInt(gotId, 10);
  const carList = useSelector(state => state.CarList.data);

  React.useEffect(() => {
    if (carList.length === 0) {
      dispatch(GetCarList());
    }
  }, [dispatch]);

  const carElements = carList.map(car => (
    <article key={car.id}>
      {car.id === gotIdInt
        ? (
          <div className="carItemCar">
            <img className="caritemImgCar" src={car.image} alt={car.id} />
            <div className="car-detail-table">
              <h2>Car Details</h2>
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
        : <p /> }
    </article>
  ));
  const showData = () => {
    if (!_.isEmpty(carList)) {
      return (
        <div className="carListContainerCar">
          {carElements}
        </div>
      );
    }

    if (carList.loading) {
      return <p>Loading...</p>;
    }

    if (carList.errorMsg !== '') {
      return <p>{carList.errorMsg}</p>;
    }

    return <p>Unable to get data msgFrom:CarList-showData method</p>;
  };

  return (
    <div>
      {showData()}
      <button className="fav-button" type="button">Add to favorite</button>
    </div>
  );
};

Car.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Car;
