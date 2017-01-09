import * as types from '../constants/ActionTypes';
import fetch from 'isomorphic-fetch';

function addMessage(message) {
  return {
    type: types.ADD_MESSAGE,
    message
  };
}

export function receiveRawMessage(message) {
  return {
    type: types.RECEIVE_MESSAGE,
    message
  };
}