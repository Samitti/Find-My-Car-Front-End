import { combineReducers } from 'redux';
import carReducer from './cars/carReducer';
import favReducer from './favs/favReducer';
import userReducer from './user/userReducer';

const rootReducer = combineReducers({
  carList: carReducer,
  favList: favReducer,
  user: userReducer,
});

export default rootReducer;
