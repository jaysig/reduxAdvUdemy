import {
  FETCH_USERS,
} from '../actions/types';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_USERS:
      return [ ...state, ...action.payload ]; // take existing state and concat on new user
  }

  return state;
}
