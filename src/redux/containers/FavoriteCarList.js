import React from 'react';
import { Link } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import GetFavoriteCarList from '../actions/favoriteActions';
import GetCarList from '../actions/carActions';
import '../../App.css';

const FavoriteCarList = () => {
  const dispatch = useDispatch();
  const favoriteCarList = useSelector(state => state.FavoriteCarList.data);
  const CarList = useSelector(state => state.CarList.data);
  console.log(CarList);
  const loggedInUser = localStorage.getItem('jwtoken');

  const result = jwtDecode(loggedInUser);
  const userId = result.user_id;

  const optionsListCar = {
    method: 'GET',
    url: 'https://sami-api-v1.herokuapp.com//cars',
    headers: {
      Authorization: `Bearer ${loggedInUser}`,
    },
  };

  React.useEffect(() => {
    if (CarList.length === 0) {
      dispatch(GetCarList(optionsListCar));
    }
  }, [dispatch]);

  const optionsList = {
    method: 'GET',
    url: 'https://sami-api-v1.herokuapp.com//favs',
    headers: {
      Authorization: `Bearer ${loggedInUser}`,
    },
  };

  React.useEffect(() => {
    if (favoriteCarList.length === 0) {
      dispatch(GetFavoriteCarList(optionsList));
    }
  }, [dispatch]);

  const thisUserFavs = favoriteCarList.filter(fav => fav.user_id === userId);
  const favCarIds = thisUserFavs.map(car => car.car_id);

  const myFav = CarList.cars.map(car => (
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
        : <p /> }
    </article>
  ));

  const showData = () => {
    if (favoriteCarList.loading) {
      return <p>Loading...</p>;
    }

    if (!_.isEmpty(favoriteCarList)) {
      return (
        <div className="carListContainer">
          <div className="carLists">
            {myFav}
          </div>
        </div>
      );
    }

    if (favoriteCarList.errorMsg !== '') {
      return <p>{favoriteCarList.errorMsg}</p>;
    }

    return <p>Unable to get data msgFrom:FavCarList-showData method</p>;
  };

  return (
    <div className="fav-container">
      <div className="car-header">
        <h2>My Favorite List</h2>
        <Link to="/" className="home-link">Home</Link>
      </div>
      {showData()}
    </div>
  );
};

export default FavoriteCarList;
