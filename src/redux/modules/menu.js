import { MENU_CLOSE, MENU_OPEN, MENU_TOGGLE } from './actions';

const initialState = {
  open: false
};

export default function menu(state = initialState, action = {}) {
  switch (action.type) {
    case MENU_CLOSE:
      return {
        ...state,
        open: false
      };
    case MENU_OPEN:
      return {
        ...state,
        open: true
      };
    case MENU_TOGGLE:
      return {
        ...state,
        open: !state.open
      };
    default:
      return state;
  }
}
