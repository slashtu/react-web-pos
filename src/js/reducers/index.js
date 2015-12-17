import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';
import generator from './generator';

const rootReducer = combineReducers({
  routing: routeReducer,
  generator,
});

export default rootReducer;
