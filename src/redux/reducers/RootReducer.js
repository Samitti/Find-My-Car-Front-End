import { combineReducers } from 'redux';
import CarListReducer from './CarListReducer';
import CarReducer from './CarReducer';
import UserCreateReducer from './UserCreateReducer';
import FavoriteCarListReducer from './FavoriteCarListReducer';

const RootReducer = combineReducers({
  CarList: CarListReducer,
  Car: CarReducer,
  User: UserCreateReducer,
  FavoriteCarList: FavoriteCarListReducer,

});

export default RootReducer;
