import { PLACE_CLOSE, PLACE_OPEN, PLACE_TOGGLE } from './actions';

const initialState = {
  open: true
};

export default function place(state = initialState, action = {}) {
  switch (action.type) {
    case PLACE_CLOSE:
      return {
        ...state,
        open: false
      };
    case PLACE_OPEN:
      return {
        ...state,
        open: true
      };
    case PLACE_TOGGLE:
      return {
        ...state,
        open: !state.open
      };
    default:
      return state;
  }
}
