import { combineReducers } from 'redux';
import CarListReducer from './CarListReducer';
import CarReducer from './CarReducer';

const RootReducer = combineReducers({
  CarList: CarListReducer,
  Car: CarReducer,
});

export default RootReducer;
