import React from 'react';
import jwtDecode from 'jwt-decode';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import _ from 'lodash';

const Car = props => {
  const { match } = props;
  const gotId = match.params.id;
  const gotIdInt = parseInt(gotId, 10);
  const carList = useSelector(state => state.carList.cars);
  const favData = useSelector(state => state.favList);
  const checkedCarList = carList.length === 0 ? [] : carList.data.cars;
  const favCarsAll = favData.favs.length === 0 ? [] : favData.favs.data.data;
  const favCarIds = favCarsAll.map(car => car.car_id);
  const history = useHistory();

  const backSign = '';

  const carElements = checkedCarList.map(car => (
    <article key={car.id}>
      {car.id === gotIdInt
        ? (
          <div className="carItemCar">
            <div className="car-header">
              <h2>Car Details</h2>
              <a href="/" className="home-link">Home</a>
            </div>
            <img className="caritemImgCar" src={car.image} alt={car.id} />
            <div className="car-detail-table">
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

  const handleFavorate = () => {
    const loggedInUser = localStorage.getItem('jwtoken');
    const result = jwtDecode(loggedInUser);
    const formData = new FormData();

    formData.append('user_id', result.user_id);
    formData.append('car_id', gotIdInt);
    fetch('http://127.0.0.1:4000/favs', {
      method: 'POST',
      body: formData,
      headers: { Authorization: `Bearer ${loggedInUser}` },
    }).then(response => {
      if (response.ok) {
        history.push('/Favorite');
      }
    }).catch(() => {

    });
  };

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
      <div className="cackbtn" type="button"><a href="/">{backSign}</a></div>
      {showData()}
      {favCarIds.includes(gotIdInt)
        ? (
          <div>
            <button className="fav-button" type="button">It is Your Favorite</button>
          </div>
        )
        : (
          <div>
            <button className="fav-button" type="button" onClick={handleFavorate}>Add to favorite</button>
          </div>
        )}
    </div>
  );
};

Car.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Car;
