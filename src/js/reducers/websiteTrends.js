import { combineReducers } from 'redux';
import * as types from '../constants/ActionTypes';

function oneDay(state = [], action) {
  switch (action.type) {
  case types.LOAD_DATA_SUCCESS:
    return [...action.data.websiteTrends['1Day']];

  case types.SET_WEBSITETRENDS_1DAY:
    return state.map( function( item, i ) {
      return [ item[0], action.data[i]];
    });

  default:
    return state;
  }
}

export default combineReducers({
  oneDay,
});
