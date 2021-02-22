import { combineReducers } from 'redux';
import CarListReducer from './CarListReducer';
import CarReducer from './CarReducer';
import UserCreateReducer from './UserCreateReducer';

const RootReducer = combineReducers({
  CarList: CarListReducer,
  Car: CarReducer,
  User: UserCreateReducer,
});

export default RootReducer;
