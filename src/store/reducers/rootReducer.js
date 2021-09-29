import { combineReducers } from 'redux';
import { agentsReducer } from './agentsReducer';
import { housesReducer } from './housesReducer';

export default combineReducers({ agentsReducer, housesReducer });
