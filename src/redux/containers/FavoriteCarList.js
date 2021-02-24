import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
// import GetFavoriteCarList from '../actions/favoriteActions';
import GetCarList from '../actions/carActions';
import '../../App.css';

const FavoriteCarList = () => {
  const dispatch = useDispatch();
  const favoriteCarList = useSelector(state => state.FavoriteCarList.data);
  // const loggedInUser = localStorage.getItem('user');
  // const userId = parseInt(loggedInUser, 10);

  const carList = useSelector(state => state.CarList.data);

  const optionsList = {
    method: 'GET',
    url: 'http://localhost:3001/api/v1/cars',
  };

  React.useEffect(() => {
    if (carList.length === 0) {
      dispatch(GetCarList(optionsList));
    }
  }, [dispatch]);
  // const thisUserFavs = favoriteCarList.filter(fav => fav.user_id === userId);
  // const favCarIds = thisUserFavs.map(car => car.id);
  console.log(carList);
  // const thisUserFavsCarList = favoriteCarList.filter(fav => fav.user_id === userId);

  const favElements = carList.map(car => (
    <article key={car.id} className="favItem">
      {console.log(car)}
      <div className="carItemCar">
        <img className="caritemImgCar" src={car.image} alt={car.id} />
        <div className="carName">
          <p>{car.name}</p>
          <Link to={`./cars/${car.id}`} car={car} id="viewLink">
            <span>VIEW CAR</span>
          </Link>
        </div>
      </div>
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
            {favElements}
          </div>
        </div>
      );
    }

    if (favoriteCarList.errorMsg !== '') {
      return <p>{favoriteCarList.errorMsg}</p>;
    }

    return <p>Unable to get data msgFrom:CarList-showData method</p>;
  };

  return (
    <div>
      {showData()}
    </div>
  );
};

export default FavoriteCarList;
