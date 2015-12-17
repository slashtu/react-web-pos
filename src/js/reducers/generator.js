import { combineReducers } from 'redux';
import * as types from '../constants/ActionTypes';
import websiteTrends from './websiteTrends';

function user(state = { email: '' }, action) {
  switch (action.type) {
  case types.LOAD_DATA_SUCCESS:
    return {
      email: action.data.user.email,
    };

  case types.SET_USER:
    return {
      email: action.user.email,
    };

  default:
    return state;
  }
}

function isFetching( state = false, action) {
  switch (action.type) {
  case types.LOAD_DATA:
    return true;

  case types.LOAD_DATA_SUCCESS:
    return false;

  case types.SAVE_DATA:
    return true;

  case types.SAVE_DATA_SUCCESS:
    return false;

  default:
    return state;
  }
}

export default combineReducers({
  isFetching,
  user,
  websiteTrends,
});
