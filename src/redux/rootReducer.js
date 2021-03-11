import { combineReducers } from 'redux';
import carReducer from './cars/carReducer';
import favReducer from './favs/favReducer';

const rootReducer = combineReducers({
  carList: carReducer,
  favList: favReducer,
});

export default rootReducer;
