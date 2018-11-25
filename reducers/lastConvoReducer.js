import { CURRENT_CONVO } from '../actions';

export default function (state = '', action) {
  const {
    type, username,
  } = action;
  switch (type) {
    case CURRENT_CONVO:
      return username;
    default:
      return state;
  }
}
