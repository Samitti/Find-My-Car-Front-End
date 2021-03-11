import { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCars } from '../redux';

function CarsContainer({ carData, fetchCars }) {
  useEffect(() => {
    fetchCars();
  }, []);

  return carData.loading ? (
    <h2>Loading</h2>
  ) : carData.error ? (
    <h2>{carData.error}</h2>
  ) : (
    <div>
      <p>{carData.cars.map(car => <p key={car.id}>{car.name}</p>)}</p>
    </div>
  );
}

const mapStateToProps = state => ({
  carData: state.cars,
});

const mapDispatchToProps = dispatch => ({
  fetchCars: () => dispatch(fetchCars()),
});

CarsContainer.propTypes = {
  carData: PropTypes.instanceOf(Array).isRequired,
  fetchCars: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CarsContainer);
