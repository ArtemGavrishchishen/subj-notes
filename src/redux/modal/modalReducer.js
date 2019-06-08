import types from './modalActionTypes';

export default function modalReducer(state = false, { type }) {
  switch (type) {
    case types.TOGGLE:
      return !state;

    default:
      return state;
  }
}
