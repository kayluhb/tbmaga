const NS = 'tbmaga/';

export const LOAD_PLACE = `${NS}LOAD_PLACE`;
export const MENU_CLOSE = `${NS}MENU_CLOSE`;
export const MENU_OPEN = `${NS}MENU_OPEN`;
export const MENU_TOGGLE = `${NS}MENU_TOGGLE`;
export const PLACE_CLOSE = `${NS}PLACE_CLOSE`;
export const PLACE_OPEN = `${NS}PLACE_OPEN`;
export const PLACE_TOGGLE = `${NS}PLACE_TOGGLE`;

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
