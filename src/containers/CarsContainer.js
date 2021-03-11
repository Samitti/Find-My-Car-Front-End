import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import PropTypes from 'prop-types';
import _ from 'lodash';
import { fetchCars } from '../redux/cars/carActions';

function CarsContainer() {
  const dispatch = useDispatch();
  const carData = useSelector(state => state.carList);
  const loggedInUser = localStorage.getItem('jwtoken');
  const optionsList = {
    method: 'GET',
    url: 'http://127.0.0.1:4000/cars',
    headers: {
      Authorization: `Bearer ${loggedInUser}`,
    },
  };

  useEffect(() => {
    // fetchCars(optionsList);
    dispatch(fetchCars(optionsList));
  }, []);

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
            {/* {carElements} */}
            <p>Loaded Cars</p>
          </div>
        </div>
      );
    }

    return <p>Unable to get data!</p>;
  };

  return (
    <div>
      {showData()}
    </div>
  );
}

// // const mapStateToProps = state => ({
// //   carData: state.carList,
// // });

// const mapDispatchToProps = dispatch => ({
//   fetchCars: optionsList => dispatch(fetchCars(optionsList)),
// });

// CarsContainer.propTypes = {
//   // carData: PropTypes.instanceOf(Array).isRequired,
//   fetchCars: PropTypes.func.isRequired,
// };

export default CarsContainer;
