const NS = 'tbmaga/';

export const LOAD_PLACE = `${NS}LOAD_PLACE`;
export const MENU_CLOSE = `${NS}MENU_CLOSE`;
export const MENU_OPEN = `${NS}MENU_OPEN`;
export const MENU_TOGGLE = `${NS}MENU_TOGGLE`;
export const PLACE_CLOSE = `${NS}PLACE_CLOSE`;
export const PLACE_OPEN = `${NS}PLACE_OPEN`;
export const PLACE_TOGGLE = `${NS}PLACE_TOGGLE`;
export const PLACE_CLOSE_MEDIA = `${NS}PLACE_CLOSE_MEDIA`;
export const PLACE_OPEN_MEDIA = `${NS}PLACE_OPEN_MEDIA`;
export const PLACE_TOGGLE_MEDIA = `${NS}PLACE_TOGGLE_MEDIA`;

export function load(slug) {
  return {
    type: LOAD_PLACE,
    slug
  };
}

export function menuClose() {
  return {
    type: MENU_CLOSE
  };
}

export function menuOpen() {
  return {
    type: MENU_OPEN
  };
}

export function menuToggle() {
  return {
    type: MENU_TOGGLE
  };
}

export function placeClose() {
  return {
    type: PLACE_CLOSE
  };
}

export function placeOpen() {
  return {
    type: PLACE_OPEN
  };
}

export function placeToggle() {
  return {
    type: PLACE_TOGGLE
  };
}

export function placeCloseMedia() {
  return {
    type: PLACE_CLOSE_MEDIA
  };
}

export function placeOpenMedia() {
  return {
    type: PLACE_OPEN_MEDIA
  };
}

export function placeToggleMedia() {
  return {
    type: PLACE_TOGGLE_MEDIA
  };
}
