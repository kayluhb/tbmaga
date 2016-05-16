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
        past: true,
        type,
        properties: {
          date: 'May 15th',
          day: 1,
          fullTitle: 'Brooklyn, NY',
          id: 1,
          miles: 0,
          next: 2,
          photos: 10,
          prev: 22,
          slug: 'brooklyn',
          title: 'Brooklyn',
          why: 'After years of living here, Lillian and Caleb are moving to Austin, Texas to be closer to family, have their own washer and dryer, and get a dog.',
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
          ],
          media: [
            '<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-version="6" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:658px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:8px;"> <div style=" background:#F8F8F8; line-height:0; margin-top:40px; padding:50.0% 0; text-align:center; width:100%;"> <div style=" background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAAGFBMVEUiIiI9PT0eHh4gIB4hIBkcHBwcHBwcHBydr+JQAAAACHRSTlMABA4YHyQsM5jtaMwAAADfSURBVDjL7ZVBEgMhCAQBAf//42xcNbpAqakcM0ftUmFAAIBE81IqBJdS3lS6zs3bIpB9WED3YYXFPmHRfT8sgyrCP1x8uEUxLMzNWElFOYCV6mHWWwMzdPEKHlhLw7NWJqkHc4uIZphavDzA2JPzUDsBZziNae2S6owH8xPmX8G7zzgKEOPUoYHvGz1TBCxMkd3kwNVbU0gKHkx+iZILf77IofhrY1nYFnB/lQPb79drWOyJVa/DAvg9B/rLB4cC+Nqgdz/TvBbBnr6GBReqn/nRmDgaQEej7WhonozjF+Y2I/fZou/qAAAAAElFTkSuQmCC); display:block; height:44px; margin:0 auto -44px; position:relative; top:-22px; width:44px;"></div></div> <p style=" margin:8px 0 0 0; padding:0 4px;"> <a href="https://www.instagram.com/p/BFHy1DABxJQ/" style=" color:#000; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none; word-wrap:break-word;" target="_blank">Checking out the Turrell</a></p> <p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;">A photo posted by Caleb Brown (@kayluhb) on <time style=" font-family:Arial,sans-serif; font-size:14px; line-height:17px;" datetime="2016-05-07T21:52:03+00:00">May 7, 2016 at 2:52pm PDT</time></p></div></blockquote>',
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/LWXSxEhmgIk?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>'
          ]
        },
        geometry: {
          type: geometryType,
          coordinates: [-73.948105, 40.727255]
        }
      },
      {
        current: true,
        type,
        properties: {
          date: 'May 15th',
          day: 1,
          fullTitle: 'Ann Arbor, MI',
          id: 2,
          miles: 646,
          photos: 8,
          next: 3,
          prev: 1,
          slug: 'ann-arbor',
          title: 'Ann Arbor',
          why: 'Caleb\'s family has a long history in Ann Arbor and his mother and other family members also live here.',
          soundtrack: [
            {
              title: 'Simon and Garfunkel - America',
              img: 'garfunk.jpg'
            },
            {
              title: 'The Promise Ring - Jersey shore',
              img: 'promise-ring.jpg'
            },
            {
              title: 'Thao & The Get Down Stay Down — Nobody Dies',
              img: 'thao.jpg'
            },
            {
              title: 'Estelle and Kanye West - American Boy',
              img: 'estelle.jpg'
            },
            {
              title: 'Bruce Springsteen - Born to run',
              img: 'bruce.jpg'
            },
            {
              title: 'The Roots - You Got Me',
              img: 'the-roots.jpg'
            },
            {
              title: 'Gillian Welch - Look at Miss Ohio',
              img: 'gillian.jpg'
            }
          ],
          media: [
            '<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-version="7" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:658px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:8px;"> <div style=" background:#F8F8F8; line-height:0; margin-top:40px; padding:50.0% 0; text-align:center; width:100%;"> <div style=" background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURczMzPf399fX1+bm5mzY9AMAAADiSURBVDjLvZXbEsMgCES5/P8/t9FuRVCRmU73JWlzosgSIIZURCjo/ad+EQJJB4Hv8BFt+IDpQoCx1wjOSBFhh2XssxEIYn3ulI/6MNReE07UIWJEv8UEOWDS88LY97kqyTliJKKtuYBbruAyVh5wOHiXmpi5we58Ek028czwyuQdLKPG1Bkb4NnM+VeAnfHqn1k4+GPT6uGQcvu2h2OVuIf/gWUFyy8OWEpdyZSa3aVCqpVoVvzZZ2VTnn2wU8qzVjDDetO90GSy9mVLqtgYSy231MxrY6I2gGqjrTY0L8fxCxfCBbhWrsYYAAAAAElFTkSuQmCC); display:block; height:44px; margin:0 auto -44px; position:relative; top:-22px; width:44px;"></div></div> <p style=" margin:8px 0 0 0; padding:0 4px;"> <a href="https://www.instagram.com/p/BFeUuJfhxDS/" style=" color:#000; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none; word-wrap:break-word;" target="_blank">The road goes on forever. Somewhere in Pennsylvania... #tbmaga</a></p> <p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;">A photo posted by Caleb Brown (@kayluhb) on <time style=" font-family:Arial,sans-serif; font-size:14px; line-height:17px;" datetime="2016-05-16T15:51:30+00:00">May 16, 2016 at 8:51am PDT</time></p></div></blockquote>',
            '<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-version="7" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:658px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:8px;"> <div style=" background:#F8F8F8; line-height:0; margin-top:40px; padding:62.5% 0; text-align:center; width:100%;"> <div style=" background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURczMzPf399fX1+bm5mzY9AMAAADiSURBVDjLvZXbEsMgCES5/P8/t9FuRVCRmU73JWlzosgSIIZURCjo/ad+EQJJB4Hv8BFt+IDpQoCx1wjOSBFhh2XssxEIYn3ulI/6MNReE07UIWJEv8UEOWDS88LY97kqyTliJKKtuYBbruAyVh5wOHiXmpi5we58Ek028czwyuQdLKPG1Bkb4NnM+VeAnfHqn1k4+GPT6uGQcvu2h2OVuIf/gWUFyy8OWEpdyZSa3aVCqpVoVvzZZ2VTnn2wU8qzVjDDetO90GSy9mVLqtgYSy231MxrY6I2gGqjrTY0L8fxCxfCBbhWrsYYAAAAAElFTkSuQmCC); display:block; height:44px; margin:0 auto -44px; position:relative; top:-22px; width:44px;"></div></div> <p style=" margin:8px 0 0 0; padding:0 4px;"> <a href="https://www.instagram.com/p/BFcn-vzypjA/" style=" color:#000; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none; word-wrap:break-word;" target="_blank">The Cottage Family Restaurant in Mill Hall, PA: where salads come topped with fries and you get looks if you&#39;re not donned in camouflage. Highly recommend.  #tbmaga</a></p> <p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;">A photo posted by Lillian (@lillian_brown) on <time style=" font-family:Arial,sans-serif; font-size:14px; line-height:17px;" datetime="2016-05-16T00:01:18+00:00">May 15, 2016 at 5:01pm PDT</time></p></div></blockquote>'
          ]
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
          why: 'Caleb\'s sister Melissa and her family live here.'
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
          why: 'Caleb\'s sister Rebecca and her family live here.'
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
          why: 'Caleb\'s dad lives here.'
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
          why: 'Lillian and Caleb love Chicago and the friends that live here.'
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
          why: 'We are not sure, but we hear it\'s cool and we like good food and beer.'
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
          why: 'Frank Loyd Wright.'
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
          why: 'Lillian\'s uncle John recommended this as a great place to explore, and he\'s a road trip expert.'
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
          why: 'Everyone who has visited this place recommends it.'
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
          why: 'It\'s fucking Yellowstone man. Do you need a reason why?'
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
          fullTitle: 'Glacier National Park, MT',
          id: 12,
          miles: 377,
          next: 13,
          prev: 11,
          slug: 'glacier-national-park',
          title: 'Glacier National Park',
          why: 'Danny DeSimone recommended it and we trust him.'
        },
        geometry: {
          type: geometryType,
          coordinates: [-115.9703907, 47.7435717]
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
          why: 'Lillian used to live here and wants to share it with Caleb.'
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
          why: 'The Austin of the PNW, Caleb\'s cousin lives here and they have great coffee and beer.'
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
          why: 'This is one of Lillian and Caleb\'s favorite cities. Also, Tartine.'
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
          why: 'Lillian\'s cousin and childhood friend lives here. And Caleb wants to see palm trees.'
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
          fullTitle: 'Palm Springs, CA',
          id: 17,
          miles: 107,
          next: 18,
          prev: 16,
          slug: 'palm-springs',
          title: 'Palm Springs',
          why: 'We\'ve never been and we hear it\'s FABULOUS.'
        },
        geometry: {
          type: geometryType,
          coordinates: [-116.7040323, 33.7715534]
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
          why: 'We want to feel small while the world feels big around us.'
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
          fullTitle: 'Antelope Canyon, AZ',
          id: 19,
          miles: 708,
          next: 20,
          prev: 18,
          slug: 'antelope-canyon',
          title: 'Antelope Canyon',
          why: 'It looks amazing in photos but we want to see it with our own four eyes. '
        },
        geometry: {
          type: geometryType,
          coordinates: [-111.376594, 36.8618613]
        }
      },
      {
        upcoming: true,
        type,
        properties: {
          date: 'June 7th',
          day: 18,
          fullTitle: 'Albuquerque, TX',
          id: 20,
          miles: 186,
          next: 21,
          prev: 19,
          slug: 'albuquerque',
          title: 'Albuquerque',
          why: 'Because we need a place to stop between Grand Canyon & Carlsbad.'
        },
        geometry: {
          type: geometryType,
          coordinates: [-106.816908, 35.082329]
        }
      },
      {
        upcoming: true,
        type,
        properties: {
          date: 'June 6th',
          day: 17,
          fullTitle: 'Carlsbad, NM',
          id: 21,
          miles: 708,
          next: 22,
          prev: 20,
          slug: 'carlsbad',
          title: 'Carlsbad',
          why: 'Caleb loves caves.'
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
          id: 22,
          miles: 186,
          next: 23,
          prev: 21,
          slug: 'marfa',
          title: 'Marfa',
          why: 'There is too much cool here to not go. Also, Beyonce has been.'
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
          id: 23,
          miles: 98,
          next: 24,
          prev: 22,
          slug: 'big-bend',
          title: 'Big Bend',
          why: 'Caleb needs to go to West Texas to be able to call himself a true Texan.'
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
          id: 24,
          miles: 435,
          next: 1,
          prev: 23,
          slug: 'austin',
          title: 'Austin',
          why: '"There is a freedom you begin to feel the closer you get to Austin, Texas" - Willie'
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
