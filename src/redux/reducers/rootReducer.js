import { combineReducers } from 'redux';
import carReducer from './carReducer';
import favReducer from './favReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  carList: carReducer,
  favList: favReducer,
  user: userReducer,
});

export default rootReducer;
