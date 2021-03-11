import { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { fetchFavs } from '../redux/favs/favActions';

function FavsContainer({ favData, fetchFavs }) {
  const loggedInUser = 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo3fQ.kPxvpXMFUMcI-LnBA9ngNl8mL00Sk4OPFn8lElNcXHM';
  const optionsList = {
    method: 'GET',
    url: 'http://127.0.0.1:4000/favs',
    headers: {
      Authorization: `Bearer ${loggedInUser}`,
    },
  };

  useEffect(() => {
    fetchFavs(optionsList);
  }, []);

  console.log(optionsList);

  const showData = () => {
    if (favData.loading) {
      return <p>Loading...</p>;
    }
    if (favData.error !== '') {
      return (
        <div>
          <p>{favData.error}</p>
          <p>Please login first!</p>
        </div>
      );
    }
    if (!_.isEmpty(favData)) {
      return (
        <div className="carListContainer">
          <div className="carLists">
            {/* {carElements} */}
            <p>Loaded Favs</p>
          </div>
        </div>
      );
    }

    return <p>Unable to get Favs!</p>;
  };

  return (
    <div>
      {showData()}
    </div>
  );
}

const mapStateToProps = state => ({
  favData: state.favList,
});

const mapDispatchToProps = dispatch => ({
  fetchFavs: optionsList => dispatch(fetchFavs(optionsList)),
});

FavsContainer.propTypes = {
  favData: PropTypes.instanceOf(Array).isRequired,
  fetchFavs: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FavsContainer);
