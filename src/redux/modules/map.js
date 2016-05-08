/* eslint-disable max-len */
import { LOCATION_CHANGE } from 'react-router-redux';
import { LOAD_PLACE } from './actions';

const geometryType = 'Point';
const type = 'Feature';

export const PLACES = 'places';

const initialState = {
  center: null,
  places: {
    type: 'FeatureCollection',
    features: [
      {
        current: true,
        type,
        properties: {
          date: 'May 15th',
          day: 1,
          fullTitle: 'Brooklyn, NY',
          id: 1,
          miles: 0,
          next: 2,
          photos: 3,
          prev: 20,
          slug: 'brooklyn',
          title: 'Brooklyn',
          why: 'Lillian and Caleb have lived here for years.',
          soundtrack: [
            {
              title: 'LCD Soundsystem - New York I Love You, but You\'re Bringing Me Down',
              img: 'lcd.jpg'
            },
            {
              title: 'Leonard Cohen - First We Take Manhattan',
              img: 'leonard.jpg'
            },
            {
              title: 'Bob Dylan - Talkin\' New York',
              img: 'bob.jpg'
            }
          ]
        },
        geometry: {
          type: geometryType,
          coordinates: [-73.948105, 40.727255]
        }
      },
      {
        upcoming: true,
        type,
        properties: {
          date: 'May 15th',
          day: 1,
          fullTitle: 'Ann Arbor, MI',
          id: 2,
          miles: 633,
          next: 3,
          prev: 1,
          slug: 'ann-arbor',
          title: 'Ann Arbor',
          why: 'Caleb\'s family has a long history here and his mother and other family members live here.'
        },
        geometry: {
          type: geometryType,
          coordinates: [-83.843580, 42.282076]
        }
      },
      {
        upcoming: true,
        type,
        properties: {
          date: 'May 16th',
          day: 2,
          fullTitle: 'Columbus, OH',
          id: 3,
          miles: 193,
          next: 4,
          prev: 2,
          slug: 'columbus',
          title: 'Columbus',
          why: 'Caleb\'s sister her family live here'
        },
        geometry: {
          type: geometryType,
          coordinates: [-82.998794, 39.961176]
        }
      },
      {
        upcoming: true,
        type,
        properties: {
          date: 'May 17th',
          day: 3,
          fullTitle: 'Grand Blanc, MI',
          id: 4,
          miles: 242,
          next: 5,
          prev: 3,
          slug: 'grand-blanc',
          title: 'Grand Blanc',
          why: 'Caleb\'s sister and her family live here'
        },
        geometry: {
          type: geometryType,
          coordinates: [-83.629952, 42.927528]
        }
      },
      {
        upcoming: true,
        type,
        properties: {
          date: 'May 18th',
          day: 4,
          fullTitle: 'Springfield, IL',
          id: 5,
          miles: 461,
          next: 6,
          prev: 4,
          slug: 'springfield',
          title: 'Springfield',
          why: 'Caleb\'s dad lives here'
        },
        geometry: {
          type: geometryType,
          coordinates: [-89.650148, 39.781721]
        }
      },
      {
        upcoming: true,
        type,
        properties: {
          date: 'May 19th',
          day: 5,
          fullTitle: 'Chicago, IL',
          id: 6,
          miles: 208,
          next: 7,
          prev: 5,
          slug: 'chicago',
          title: 'Chicago',
          why: 'Lillian and Caleb have friends here'
        },
        geometry: {
          type: geometryType,
          coordinates: [-87.629798, 41.878114]
        }
      },
      {
        upcoming: true,
        type,
        properties: {
          date: 'May 20th',
          day: 6,
          fullTitle: 'Milwaukee, WI',
          id: 7,
          miles: 92,
          next: 8,
          prev: 6,
          slug: 'milwaukee',
          title: 'Milwaukee',
          why: 'Lillian and Caleb always wanted to visit here'
        },
        geometry: {
          type: geometryType,
          coordinates: [-87.906474, 43.038902]
        }
      },
      {
        upcoming: true,
        type,
        properties: {
          date: 'May 21st',
          day: 7,
          fullTitle: 'Taliesin, WI',
          id: 8,
          miles: 117,
          next: 9,
          prev: 7,
          slug: 'taliesin',
          title: 'Taliesin',
          why: 'Frank Loyd Wright is here'
        },
        geometry: {
          type: geometryType,
          coordinates: [-90.067902, 43.175269]
        }
      },
      {
        upcoming: true,
        type,
        properties: {
          date: 'May 22nd',
          day: 8,
          fullTitle: 'The Badlands, SD',
          id: 9,
          miles: 782,
          next: 10,
          prev: 8,
          slug: 'the-badlands',
          title: 'The Badlands',
          why: 'Lillian\'s uncle recommended this'
        },
        geometry: {
          type: geometryType,
          coordinates: [-101.984042, 43.726938]
        }
      },
      {
        upcoming: true,
        type,
        properties: {
          date: 'May 23rd',
          day: 9,
          fullTitle: 'Grand Teton, WY',
          id: 10,
          miles: 560,
          next: 11,
          prev: 9,
          slug: 'grand-teton',
          title: 'Grand Teton',
          why: 'Lillian\'s uncle recommended this'
        },
        geometry: {
          type: geometryType,
          coordinates: [-110.718265, 43.655766]
        }
      },
      {
        upcoming: true,
        type,
        properties: {
          date: 'May 25th',
          day: 10,
          fullTitle: 'Yellowstone, WY',
          id: 11,
          miles: 130,
          next: 12,
          prev: 10,
          slug: 'yellowstone',
          title: 'Yellowstone',
          why: 'Lillian\'s parent recently visited'
        },
        geometry: {
          type: geometryType,
          coordinates: [-110.588454, 44.427968]
        }
      },
      {
        upcoming: true,
        type,
        properties: {
          date: 'May 27th',
          day: 11,
          fullTitle: 'Missoula, MT',
          id: 12,
          miles: 262,
          next: 13,
          prev: 11,
          slug: 'missoula',
          title: 'Missoula',
          why: ''
        },
        geometry: {
          type: geometryType,
          coordinates: [-114.1582501, 46.8762361]
        }
      },
      {
        upcoming: true,
        type,
        properties: {
          date: 'May 28th',
          day: 11,
          fullTitle: 'Seattle, WA',
          id: 13,
          miles: 475,
          next: 14,
          prev: 12,
          slug: 'seattle',
          title: 'Seattle',
          why: 'Lillian used to live here'
        },
        geometry: {
          type: geometryType,
          coordinates: [-122.332071, 47.606209]
        }
      },
      {
        upcoming: true,
        type,
        properties: {
          date: 'May 29th',
          day: 12,
          fullTitle: 'Portland, OR',
          id: 14,
          miles: 174,
          next: 15,
          prev: 13,
          slug: 'portland',
          title: 'Portland',
          why: 'Caleb\'s cousin lives here'
        },
        geometry: {
          type: geometryType,
          coordinates: [-122.676482, 45.523062]
        }
      },
      {
        upcoming: true,
        type,
        properties: {
          date: 'May 31th',
          day: 13,
          fullTitle: 'San Francisco, CA',
          id: 15,
          miles: 636,
          next: 16,
          prev: 14,
          slug: 'san-francisco',
          title: 'San Francisco',
          why: 'This is one of Lillian and Caleb\'s favorite cities'
        },
        geometry: {
          type: geometryType,
          coordinates: [-122.419416, 37.774929]
        }
      },
      {
        upcoming: true,
        type,
        properties: {
          date: 'June 1st',
          day: 14,
          fullTitle: 'Los Angeles, CA',
          id: 16,
          miles: 383,
          next: 17,
          prev: 15,
          slug: 'los-angeles',
          title: 'Los Angeles',
          why: 'Caleb has never been'
        },
        geometry: {
          type: geometryType,
          coordinates: [-118.243685, 34.052234]
        }
      },
      {
        upcoming: true,
        type,
        properties: {
          date: 'June 2nd',
          day: 15,
          fullTitle: 'San Diego, CA',
          id: 17,
          miles: 124,
          next: 18,
          prev: 16,
          slug: 'san-diego',
          title: 'San Diego',
          why: 'To try out the IPAs'
        },
        geometry: {
          type: geometryType,
          coordinates: [-117.161084, 32.715738]
        }
      },
      {
        upcoming: true,
        type,
        properties: {
          date: 'June 4th',
          day: 16,
          fullTitle: 'Grand Canyon, AZ',
          id: 18,
          miles: 552,
          next: 19,
          prev: 17,
          slug: 'grand-canyon',
          title: 'Grand Canyon',
          why: 'Caleb has never been'
        },
        geometry: {
          type: geometryType,
          coordinates: [-112.140111, 36.054445]
        }
      },
      {
        upcoming: true,
        type,
        properties: {
          date: 'June 6th',
          day: 17,
          fullTitle: 'Carlsbad, NM',
          id: 19,
          miles: 708,
          next: 20,
          prev: 18,
          slug: 'carlsbad',
          title: 'Carlsbad',
          why: 'Caleb loves caves'
        },
        geometry: {
          type: geometryType,
          coordinates: [-104.556714, 32.147855]
        }
      },
      {
        upcoming: true,
        type,
        properties: {
          date: 'June 7th',
          day: 18,
          fullTitle: 'Marfa, TX',
          id: 20,
          miles: 186,
          next: 21,
          prev: 19,
          slug: 'marfa',
          title: 'Marfa',
          why: 'Beyonce once went here'
        },
        geometry: {
          type: geometryType,
          coordinates: [-104.020623, 30.309462]
        }
      },
      {
        upcoming: true,
        type,
        properties: {
          date: 'June 8th',
          day: 18,
          fullTitle: 'Big Bend National Park, TX',
          id: 21,
          miles: 98,
          next: 22,
          prev: 20,
          slug: 'big-bend',
          title: 'Big Bend',
          why: ''
        },
        geometry: {
          type: geometryType,
          coordinates: [-103.5955606, 29.3782555]
        }
      },
      {
        atx: true,
        type,
        properties: {
          date: 'June 15th',
          day: 30,
          fullTitle: 'Austin, TX',
          id: 22,
          miles: 435,
          next: 1,
          prev: 21,
          slug: 'austin',
          title: 'Austin',
          why: 'Our new home'
        },
        geometry: {
          type: geometryType,
          coordinates: [-97.743061, 30.267153]
        }
      }
    ]
  },
  place: null,
  nextSlug: '',
  prevSlug: '',
  totalMiles: 0,
  zoom: 6.5
};

function getPlace(filter) {
  return initialState.places.features.filter(filter)[0];
}

export function getPlaceSlug(id) {
  const place = getPlace(p => p.properties.id === id);
  return `/${PLACES}/${place.properties.slug}`;
}

export function getTotalMiles(id) {
  let total = 0;
  const allPlaces = initialState.places.features.filter(p => p.properties.id <= id);
  for (let i = 0; i < allPlaces.length; ++i) {
    total += allPlaces[i].properties.miles;
  }
  return total;
}

function setInitialState() {
  const place = getPlace(p => p.current === true);
  const { next, prev } = place.properties;
  const last = initialState.places.features[initialState.places.features.length - 1];
  initialState.place = place;
  initialState.center = place.geometry.coordinates;
  initialState.nextSlug = getPlaceSlug(next);
  initialState.prevSlug = getPlaceSlug(prev);
  initialState.totalMiles = getTotalMiles(last.properties.id);
}
setInitialState();

function getPlaceFromPathname(pathname) {
  // Only go to the current if we're at the homepage.
  if (pathname !== '/') {
    return null;
  }

  return getPlace(p => p.current === true);
}

function stateFromPlace(state, place) {
  const { next, prev } = place.properties;
  return {
    ...state,
    place,
    center: place.geometry.coordinates,
    nextSlug: getPlaceSlug(next),
    prevSlug: getPlaceSlug(prev)
  };
}

export default function map(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD_PLACE: {
      const place = getPlace(p => p.properties.slug === action.slug);
      return stateFromPlace(state, place);
    }
    case LOCATION_CHANGE: {
      const place = getPlaceFromPathname(action.payload.pathname);

      if (place === null) {
        return state;
      }
      return stateFromPlace(state, place);
    }
    default:
      return state;
  }
}
