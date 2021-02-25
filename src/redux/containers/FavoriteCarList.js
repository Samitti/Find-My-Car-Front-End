import React from 'react';
// import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import GetFavoriteCarList from '../actions/favoriteActions';
import '../../App.css';

const FavoriteCarList = () => {
  const dispatch = useDispatch();
  const favoriteCarList = useSelector(state => state.FavoriteCarList.data);
  const loggedInUser = localStorage.getItem('user');
  const localCars = JSON.parse(localStorage.getItem('carsLocal'));

  const userId = parseInt(loggedInUser, 10);

  React.useEffect(() => {
    if (favoriteCarList.length === 0) {
      dispatch(GetFavoriteCarList());
    }
  }, [dispatch]);
  const thisUserFavs = favoriteCarList.filter(fav => fav.user_id === userId);
  const favCarIds = thisUserFavs.map(car => car.car_id);
  console.log(favCarIds);

  const myFav = localCars.map(car => (
    <article key={car.id} className="favItem">
      {/* {favCarIds.includes(car.id) ? 'orange' : 'gray'} */}
      {favCarIds.includes(car.id)
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
    <div>
      <p>
        Current User ID :
        {loggedInUser}
      </p>
      {showData()}
    </div>
  );
};

export default FavoriteCarList;
