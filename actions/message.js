import { ADD_MESSAGE, ADD_HOUSE, ADD_USER, CURRENT_CONVO } from '.';

export function addMessage(text, username, created_at) {
  return {
    type: ADD_MESSAGE,
    text,
    username,
    created_at,
  };
}

export function addHouse(house_id, username, created_at) {
  return {
    type: ADD_HOUSE,
    house_id,
    username,
    created_at,
  };
}

export function addUser(username, password) {
  return {
    type: ADD_USER,
    username,
    password,
  }
}

export function addLastConvo(username) {
  return {
    type: CURRENT_CONVO,
    username,
  }
}
