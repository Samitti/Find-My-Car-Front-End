import { combineReducers } from 'redux';
import carReducer from './cars/carReducer';

const rootReducer = combineReducers({
  cars: carReducer,
});

export default rootReducer;
