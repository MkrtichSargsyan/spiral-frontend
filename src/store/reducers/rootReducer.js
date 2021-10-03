import { combineReducers } from 'redux';
import { agentsReducer } from './agentsReducer';
import { housesReducer } from './housesReducer';
import { authReducer } from './authReducer';
import { modalReducer } from './modalReducer';

export default combineReducers({
  agentsReducer,
  housesReducer,
  authReducer,
  modalReducer,
});
