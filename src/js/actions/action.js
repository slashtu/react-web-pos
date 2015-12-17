import { updatePath } from 'redux-simple-router';
import * as types from '../constants/ActionTypes';

export function setRoute(routePath) {
  return updatePath(routePath);
}

export function setUser( user ) {
  return { type: types.SET_USER, user };
}

export function setWebsiteTrend1day( data ) {
  return { type: types.SET_WEBSITETRENDS_1DAY, data };
}

export function loadData() {
  return { type: types.LOAD_DATA };
}

export function loadDataSuccess( data ) {
  return { type: types.LOAD_DATA_SUCCESS, data };
}

export function loadDataFailure( error ) {
  return { type: types.LOAD_DATA_FAILURE, error };
}

export function saveData() {
  return { type: types.SAVE_DATA };
}

export function saveDataSuccess(response) {
  return { type: types.SAVE_DATA_SUCCESS, response };
}

export function saveDataFailure( error ) {
  return { type: types.SAVE_DATA_FAILURE, error };
}

// async actions
export function fetchData() {
  return dispatch => {
    dispatch(loadData());

    return fetch('/api/generator')
      .then( response => {
        return response.json();
      })
      .then( json => {
        return dispatch(loadDataSuccess(json));
      });
  };
}

// async actions
export function uploadData(data) {
  return dispatch => {
    dispatch(saveData());

    return fetch('/api/generator',
      {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then( response => {
        return response.json();
      })
      .then( json => {
        return dispatch(saveDataSuccess(json));
      });
  };
}
