import {
  PLACE_CLOSE,
  PLACE_OPEN,
  PLACE_TOGGLE,
  PLACE_CLOSE_MEDIA,
  PLACE_OPEN_MEDIA,
  PLACE_TOGGLE_MEDIA
} from './actions';

const initialState = {
  open: true,
  mediaOpen: false
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
    case PLACE_CLOSE_MEDIA:
      return {
        ...state,
        mediaOpen: false
      };
    case PLACE_OPEN_MEDIA:
      return {
        ...state,
        mediaOpen: true
      };
    case PLACE_TOGGLE_MEDIA:
      return {
        ...state,
        mediaOpen: !state.open
      };
    default:
      return state;
  }
}
