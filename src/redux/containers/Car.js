import React from 'react';
import jwtDecode from 'jwt-decode';
import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import _ from 'lodash';
import GetCarList from '../actions/carActions';

const Car = props => {
  const { match } = props;
  const dispatch = useDispatch();
  const gotId = match.params.id;
  const gotIdInt = parseInt(gotId, 10);
  const carList = useSelector(state => state.CarList.data.cars);
  const backSign = '';
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
    const checkRes = res => {
      setTimeout(() => {
        if (res.ok) {
          dispatch(GetCarList());
        } else {
          console.log('Fav Fail!');
        }
      }, 2000);
    };
    formData.append('user_id', result.user_id);
    formData.append('car_id', gotIdInt);
    fetch('https://sami-api-v1.herokuapp.com//favs', {
      method: 'POST',
      body: formData,
      headers: { Authorization: `Bearer ${loggedInUser}` },
    }).then(response => checkRes(response)).catch(error => console.log(error));
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
      <button className="fav-button" type="button" onClick={handleFavorate}>Add to favorite</button>
    </div>
  );
};

Car.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Car;
