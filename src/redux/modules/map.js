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
          prev: 29,
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
        past: true,
        type,
        properties: {
          date: 'May 15th',
          day: 1,
          fullTitle: 'Ann Arbor, MI',
          id: 2,
          miles: 646,
          photos: 15,
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
              img: 'promise.jpg'
            },
            {
              title: 'Thao & The Get Down Stay Down — Nobody Dies',
              img: 'thao.jpg'
            },
            {
              title: 'Estelle and Kanye West - American Boy',
              img: 'kanye.jpg'
            },
            {
              title: 'Bruce Springsteen - Born to run',
              img: 'bruce.jpg'
            },
            {
              title: 'The Roots - You Got Me',
              img: 'roots.jpg'
            },
            {
              title: 'Gillian Welch - Look at Miss Ohio',
              img: 'gillian.jpg'
            }
          ],
          media: [
            '<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-version="7" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:658px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:8px;"> <div style=" background:#F8F8F8; line-height:0; margin-top:40px; padding:50.0% 0; text-align:center; width:100%;"> <div style=" background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURczMzPf399fX1+bm5mzY9AMAAADiSURBVDjLvZXbEsMgCES5/P8/t9FuRVCRmU73JWlzosgSIIZURCjo/ad+EQJJB4Hv8BFt+IDpQoCx1wjOSBFhh2XssxEIYn3ulI/6MNReE07UIWJEv8UEOWDS88LY97kqyTliJKKtuYBbruAyVh5wOHiXmpi5we58Ek028czwyuQdLKPG1Bkb4NnM+VeAnfHqn1k4+GPT6uGQcvu2h2OVuIf/gWUFyy8OWEpdyZSa3aVCqpVoVvzZZ2VTnn2wU8qzVjDDetO90GSy9mVLqtgYSy231MxrY6I2gGqjrTY0L8fxCxfCBbhWrsYYAAAAAElFTkSuQmCC); display:block; height:44px; margin:0 auto -44px; position:relative; top:-22px; width:44px;"></div></div> <p style=" margin:8px 0 0 0; padding:0 4px;"> <a href="https://www.instagram.com/p/BFeUuJfhxDS/" style=" color:#000; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none; word-wrap:break-word;" target="_blank">The road goes on forever. Somewhere in Pennsylvania... #tbmaga</a></p> <p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;">A photo posted by Caleb Brown (@kayluhb) on <time style=" font-family:Arial,sans-serif; font-size:14px; line-height:17px;" datetime="2016-05-16T15:51:30+00:00">May 16, 2016 at 8:51am PDT</time></p></div></blockquote>',
            '<blockquote class="instagram-media" data-instgrm-version="7" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:658px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:8px;"> <div style=" background:#F8F8F8; line-height:0; margin-top:40px; padding:62.5% 0; text-align:center; width:100%;"> <div style=" background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURczMzPf399fX1+bm5mzY9AMAAADiSURBVDjLvZXbEsMgCES5/P8/t9FuRVCRmU73JWlzosgSIIZURCjo/ad+EQJJB4Hv8BFt+IDpQoCx1wjOSBFhh2XssxEIYn3ulI/6MNReE07UIWJEv8UEOWDS88LY97kqyTliJKKtuYBbruAyVh5wOHiXmpi5we58Ek028czwyuQdLKPG1Bkb4NnM+VeAnfHqn1k4+GPT6uGQcvu2h2OVuIf/gWUFyy8OWEpdyZSa3aVCqpVoVvzZZ2VTnn2wU8qzVjDDetO90GSy9mVLqtgYSy231MxrY6I2gGqjrTY0L8fxCxfCBbhWrsYYAAAAAElFTkSuQmCC); display:block; height:44px; margin:0 auto -44px; position:relative; top:-22px; width:44px;"></div></div><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/p/BFcn-vzypjA/" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">A photo posted by Lillian (@lillian_brown)</a> on <time style=" font-family:Arial,sans-serif; font-size:14px; line-height:17px;" datetime="2016-05-16T00:01:18+00:00">May 15, 2016 at 5:01pm PDT</time></p></div></blockquote>'
          ]
        },
        geometry: {
          type: geometryType,
          coordinates: [-83.843580, 42.282076]
        }
      },
      {
        past: true,
        type,
        properties: {
          date: 'May 16th',
          day: 2,
          fullTitle: 'Columbus, OH',
          id: 3,
          miles: 241,
          next: 4,
          prev: 2,
          photos: 15,
          media: [
            '<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-version="7" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:658px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:8px;"> <div style=" background:#F8F8F8; line-height:0; margin-top:40px; padding:48.9814814815% 0; text-align:center; width:100%;"> <div style=" background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURczMzPf399fX1+bm5mzY9AMAAADiSURBVDjLvZXbEsMgCES5/P8/t9FuRVCRmU73JWlzosgSIIZURCjo/ad+EQJJB4Hv8BFt+IDpQoCx1wjOSBFhh2XssxEIYn3ulI/6MNReE07UIWJEv8UEOWDS88LY97kqyTliJKKtuYBbruAyVh5wOHiXmpi5we58Ek028czwyuQdLKPG1Bkb4NnM+VeAnfHqn1k4+GPT6uGQcvu2h2OVuIf/gWUFyy8OWEpdyZSa3aVCqpVoVvzZZ2VTnn2wU8qzVjDDetO90GSy9mVLqtgYSy231MxrY6I2gGqjrTY0L8fxCxfCBbhWrsYYAAAAAElFTkSuQmCC); display:block; height:44px; margin:0 auto -44px; position:relative; top:-22px; width:44px;"></div></div> <p style=" margin:8px 0 0 0; padding:0 4px;"> <a href="https://www.instagram.com/p/BFen78-ypqo/" style=" color:#000; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none; word-wrap:break-word;" target="_blank">Somewhere, Ohio. #tbmaga</a></p> <p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;">A photo posted by Lillian (@lillian_brown) on <time style=" font-family:Arial,sans-serif; font-size:14px; line-height:17px;" datetime="2016-05-16T18:39:24+00:00">May 16, 2016 at 11:39am PDT</time></p></div></blockquote>'
          ],
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
        past: true,
        type,
        properties: {
          date: 'May 17th',
          day: 3,
          fullTitle: 'Grand Blanc, MI',
          id: 4,
          media: [
            '<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-version="7" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:658px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:8px;"> <div style=" background:#F8F8F8; line-height:0; margin-top:40px; padding:37.5% 0; text-align:center; width:100%;"> <div style=" background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURczMzPf399fX1+bm5mzY9AMAAADiSURBVDjLvZXbEsMgCES5/P8/t9FuRVCRmU73JWlzosgSIIZURCjo/ad+EQJJB4Hv8BFt+IDpQoCx1wjOSBFhh2XssxEIYn3ulI/6MNReE07UIWJEv8UEOWDS88LY97kqyTliJKKtuYBbruAyVh5wOHiXmpi5we58Ek028czwyuQdLKPG1Bkb4NnM+VeAnfHqn1k4+GPT6uGQcvu2h2OVuIf/gWUFyy8OWEpdyZSa3aVCqpVoVvzZZ2VTnn2wU8qzVjDDetO90GSy9mVLqtgYSy231MxrY6I2gGqjrTY0L8fxCxfCBbhWrsYYAAAAAElFTkSuQmCC); display:block; height:44px; margin:0 auto -44px; position:relative; top:-22px; width:44px;"></div></div> <p style=" margin:8px 0 0 0; padding:0 4px;"> <a href="https://www.instagram.com/p/BFhEWECSpk-/" style=" color:#000; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none; word-wrap:break-word;" target="_blank">@seriouslymissy cement 🌽 &gt; cement carrots #tbmaga</a></p> <p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;">A photo posted by Lillian (@lillian_brown) on <time style=" font-family:Arial,sans-serif; font-size:14px; line-height:17px;" datetime="2016-05-17T17:26:07+00:00">May 17, 2016 at 10:26am PDT</time></p></div></blockquote>',
            '<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-version="7" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:658px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:8px;"> <div style=" background:#F8F8F8; line-height:0; margin-top:40px; padding:62.5% 0; text-align:center; width:100%;"> <div style=" background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURczMzPf399fX1+bm5mzY9AMAAADiSURBVDjLvZXbEsMgCES5/P8/t9FuRVCRmU73JWlzosgSIIZURCjo/ad+EQJJB4Hv8BFt+IDpQoCx1wjOSBFhh2XssxEIYn3ulI/6MNReE07UIWJEv8UEOWDS88LY97kqyTliJKKtuYBbruAyVh5wOHiXmpi5we58Ek028czwyuQdLKPG1Bkb4NnM+VeAnfHqn1k4+GPT6uGQcvu2h2OVuIf/gWUFyy8OWEpdyZSa3aVCqpVoVvzZZ2VTnn2wU8qzVjDDetO90GSy9mVLqtgYSy231MxrY6I2gGqjrTY0L8fxCxfCBbhWrsYYAAAAAElFTkSuQmCC); display:block; height:44px; margin:0 auto -44px; position:relative; top:-22px; width:44px;"></div></div> <p style=" margin:8px 0 0 0; padding:0 4px;"> <a href="https://www.instagram.com/p/BFjrfvBhxKI/" style=" color:#000; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none; word-wrap:break-word;" target="_blank">Mother and son.  Went back to Ann Arbor to pick up the ace. On our way to Indiana. #tbmaga</a></p> <p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;">A photo posted by Caleb Brown (@kayluhb) on <time style=" font-family:Arial,sans-serif; font-size:14px; line-height:17px;" datetime="2016-05-18T17:46:42+00:00">May 18, 2016 at 10:46am PDT</time></p></div></blockquote>'
          ],
          miles: 238,
          next: 5,
          photos: 14,
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
        past: true,
        type,
        properties: {
          date: 'May 18th',
          day: 4,
          fullTitle: 'Springfield, IL',
          id: 5,
          media: [
            '<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-version="7" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:658px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:8px;"> <div style=" background:#F8F8F8; line-height:0; margin-top:40px; padding:37.5% 0; text-align:center; width:100%;"> <div style=" background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURczMzPf399fX1+bm5mzY9AMAAADiSURBVDjLvZXbEsMgCES5/P8/t9FuRVCRmU73JWlzosgSIIZURCjo/ad+EQJJB4Hv8BFt+IDpQoCx1wjOSBFhh2XssxEIYn3ulI/6MNReE07UIWJEv8UEOWDS88LY97kqyTliJKKtuYBbruAyVh5wOHiXmpi5we58Ek028czwyuQdLKPG1Bkb4NnM+VeAnfHqn1k4+GPT6uGQcvu2h2OVuIf/gWUFyy8OWEpdyZSa3aVCqpVoVvzZZ2VTnn2wU8qzVjDDetO90GSy9mVLqtgYSy231MxrY6I2gGqjrTY0L8fxCxfCBbhWrsYYAAAAAElFTkSuQmCC); display:block; height:44px; margin:0 auto -44px; position:relative; top:-22px; width:44px;"></div></div> <p style=" margin:8px 0 0 0; padding:0 4px;"> <a href="https://www.instagram.com/p/BFkJqtTSphR/" style=" color:#000; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none; word-wrap:break-word;" target="_blank">Somewhere, IL. On our way to Springfield. #tbmaga</a></p> <p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;">A photo posted by Lillian (@lillian_brown) on <time style=" font-family:Arial,sans-serif; font-size:14px; line-height:17px;" datetime="2016-05-18T22:10:21+00:00">May 18, 2016 at 3:10pm PDT</time></p></div></blockquote>'
          ],
          miles: 506,
          next: 6,
          photos: 15,
          prev: 4,
          slug: 'springfield',
          soundtrack: [
            {
              title: 'Roger Miller - King of the Road',
              img: 'roger-miller.jpg'
            },
            {
              title: 'Bob Dylan - Highway 61',
              img: 'bob.jpg'
            }
          ],
          title: 'Springfield',
          why: 'Caleb\'s dad lives here.'
        },
        geometry: {
          type: geometryType,
          coordinates: [-89.650148, 39.781721]
        }
      },
      {
        past: true,
        type,
        properties: {
          date: 'May 19th',
          day: 5,
          fullTitle: 'Chicago, IL',
          id: 6,
          miles: 141,
          next: 7,
          photos: 28,
          prev: 5,
          slug: 'chicago',
          soundtrack: [
            {
              title: 'The Rolling Stones - Route 66',
              img: 'stones.jpg'
            },

            {
              title: 'Bob Dylan - Lay Lady Lay',
              img: 'bob.jpg'
            },
            {
              title: 'Chance the Rapper - NaNa',
              img: 'chance.jpg'
            },
            {
              title: 'Kanye West - Ultralight Beam',
              img: 'kanye.jpg'
            },
            {
              title: 'Spoon - Chicago at Night',
              img: 'spoon.jpg'
            },
            {
              title: 'Guy Clark - L.A. Freeway',
              img: 'guy-clark.jpg'
            }
          ],
          title: 'Chicago',
          why: 'Lillian and Caleb love Chicago and the friends that live here.'
        },
        geometry: {
          type: geometryType,
          coordinates: [-87.629798, 41.878114]
        }
      },
      {
        past: true,
        type,
        properties: {
          date: 'May 20th',
          day: 6,
          fullTitle: 'Elgin, IL',
          id: 7,
          miles: 62,
          next: 8,
          photos: 5,
          prev: 6,
          slug: 'elgin',
          title: 'Elgin',
          why: 'Lillian\'s aunt Katherine and her family live here.'
        },
        geometry: {
          type: geometryType,
          coordinates: [-88.4061454, 42.0373577]
        }
      },
      {
        past: true,
        type,
        properties: {
          date: 'May 20th',
          day: 6,
          fullTitle: 'Milwaukee, WI',
          id: 8,
          media: ['<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-version="7" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:658px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:8px;"> <div style=" background:#F8F8F8; line-height:0; margin-top:40px; padding:50.0% 0; text-align:center; width:100%;"> <div style=" background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURczMzPf399fX1+bm5mzY9AMAAADiSURBVDjLvZXbEsMgCES5/P8/t9FuRVCRmU73JWlzosgSIIZURCjo/ad+EQJJB4Hv8BFt+IDpQoCx1wjOSBFhh2XssxEIYn3ulI/6MNReE07UIWJEv8UEOWDS88LY97kqyTliJKKtuYBbruAyVh5wOHiXmpi5we58Ek028czwyuQdLKPG1Bkb4NnM+VeAnfHqn1k4+GPT6uGQcvu2h2OVuIf/gWUFyy8OWEpdyZSa3aVCqpVoVvzZZ2VTnn2wU8qzVjDDetO90GSy9mVLqtgYSy231MxrY6I2gGqjrTY0L8fxCxfCBbhWrsYYAAAAAElFTkSuQmCC); display:block; height:44px; margin:0 auto -44px; position:relative; top:-22px; width:44px;"></div></div> <p style=" margin:8px 0 0 0; padding:0 4px;"> <a href="https://www.instagram.com/p/BFpsyDOBxE0/" style=" color:#000; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none; word-wrap:break-word;" target="_blank">Milwaukee, where has your beer been all my life? #tbmaga</a></p> <p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;">A video posted by Caleb Brown (@kayluhb) on <time style=" font-family:Arial,sans-serif; font-size:14px; line-height:17px;" datetime="2016-05-21T01:53:23+00:00">May 20, 2016 at 6:53pm PDT</time></p></div></blockquote>'],
          miles: 79,
          photos: 22,
          next: 9,
          prev: 7,
          slug: 'milwaukee',
          soundtrack: [
            {
              title: 'Grandaddy - The Crystal Lake',
              img: 'grandaddy.jpg'
            },
          ],
          title: 'Milwaukee',
          why: 'We are not sure, but we hear it\'s cool and we like good food and beer.'
        },
        geometry: {
          type: geometryType,
          coordinates: [-87.906474, 43.038902]
        }
      },
      {
        past: true,
        type,
        properties: {
          date: 'May 21st',
          day: 7,
          fullTitle: 'Taliesin, WI',
          id: 9,
          media: [
            '<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-version="7" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:658px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:8px;"> <div style=" background:#F8F8F8; line-height:0; margin-top:40px; padding:37.4074074074% 0; text-align:center; width:100%;"> <div style=" background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURczMzPf399fX1+bm5mzY9AMAAADiSURBVDjLvZXbEsMgCES5/P8/t9FuRVCRmU73JWlzosgSIIZURCjo/ad+EQJJB4Hv8BFt+IDpQoCx1wjOSBFhh2XssxEIYn3ulI/6MNReE07UIWJEv8UEOWDS88LY97kqyTliJKKtuYBbruAyVh5wOHiXmpi5we58Ek028czwyuQdLKPG1Bkb4NnM+VeAnfHqn1k4+GPT6uGQcvu2h2OVuIf/gWUFyy8OWEpdyZSa3aVCqpVoVvzZZ2VTnn2wU8qzVjDDetO90GSy9mVLqtgYSy231MxrY6I2gGqjrTY0L8fxCxfCBbhWrsYYAAAAAElFTkSuQmCC); display:block; height:44px; margin:0 auto -44px; position:relative; top:-22px; width:44px;"></div></div> <p style=" margin:8px 0 0 0; padding:0 4px;"> <a href="https://www.instagram.com/p/BFsbT-cBxGB/" style=" color:#000; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none; word-wrap:break-word;" target="_blank">Taliesin is a special place. #tbmaga</a></p> <p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;">A photo posted by Caleb Brown (@kayluhb) on <time style=" font-family:Arial,sans-serif; font-size:14px; line-height:17px;" datetime="2016-05-22T03:18:27+00:00">May 21, 2016 at 8:18pm PDT</time></p></div></blockquote>',
            '<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-version="7" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:658px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:8px;"> <div style=" background:#F8F8F8; line-height:0; margin-top:40px; padding:37.5% 0; text-align:center; width:100%;"> <div style=" background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURczMzPf399fX1+bm5mzY9AMAAADiSURBVDjLvZXbEsMgCES5/P8/t9FuRVCRmU73JWlzosgSIIZURCjo/ad+EQJJB4Hv8BFt+IDpQoCx1wjOSBFhh2XssxEIYn3ulI/6MNReE07UIWJEv8UEOWDS88LY97kqyTliJKKtuYBbruAyVh5wOHiXmpi5we58Ek028czwyuQdLKPG1Bkb4NnM+VeAnfHqn1k4+GPT6uGQcvu2h2OVuIf/gWUFyy8OWEpdyZSa3aVCqpVoVvzZZ2VTnn2wU8qzVjDDetO90GSy9mVLqtgYSy231MxrY6I2gGqjrTY0L8fxCxfCBbhWrsYYAAAAAElFTkSuQmCC); display:block; height:44px; margin:0 auto -44px; position:relative; top:-22px; width:44px;"></div></div> <p style=" margin:8px 0 0 0; padding:0 4px;"> <a href="https://www.instagram.com/p/BFth0iHSpjX/" style=" color:#000; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none; word-wrap:break-word;" target="_blank">Where the master met his clients. #taliesin #tbmaga</a></p> <p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;">A photo posted by Lillian (@lillian_brown) on <time style=" font-family:Arial,sans-serif; font-size:14px; line-height:17px;" datetime="2016-05-22T13:34:34+00:00">May 22, 2016 at 6:34am PDT</time></p></div></blockquote>'
          ],
          miles: 139,
          next: 10,
          photos: 19,
          prev: 8,
          slug: 'taliesin',
          soundtrack: [
            {
              title: 'Johnny Cash - Ring of Fire',
              img: 'johnny.jpg'
            },
          ],
          title: 'Taliesin',
          why: 'Frank Loyd Wright.'
        },
        geometry: {
          type: geometryType,
          coordinates: [-90.067902, 43.175269]
        }
      },
      {
        past: true,
        type,
        properties: {
          date: 'May 22nd',
          day: 8,
          fullTitle: 'Badlands National Park, SD',
          id: 10,
          photos: 36,
          miles: 665,
          next: 11,
          prev: 9,
          slug: 'badlands',
          soundtrack: [
            {
              title: 'Robert Earl Keen - Amarillo Highway',
              img: 'robert-earl-keen.jpg'
            },
            {
              title: 'Gillian Welch - I Dream a Highway',
              img: 'gillian.jpg'
            },
            {
              title: 'Metronomy - I Dream a Highway',
              img: 'metronomy.jpg'
            },
          ],
          title: 'Badlands',
          why: 'Lillian\'s uncle John recommended this as a great place to explore, and he\'s a road trip expert.'
        },
        geometry: {
          type: geometryType,
          coordinates: [-101.984042, 43.726938]
        }
      },
      {
        past: true,
        type,
        properties: {
          date: 'May 23rd',
          day: 9,
          fullTitle: 'Grand Tetons, WY',
          id: 11,
          media: [
            '<iframe width="711" height="400" src="https://www.youtube.com/embed/26TaxT1IVs8?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>',
            '<iframe width="711" height="400" src="https://www.youtube.com/embed/gyoszQM5NC8?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>'
          ],
          miles: 560,
          next: 12,
          photos: 30,
          prev: 10,
          slug: 'grand-tetons',
          title: 'Grand Tetons',
          why: 'Everyone who has visited this place recommends it.'
        },
        geometry: {
          type: geometryType,
          coordinates: [-110.718265, 43.655766]
        }
      },
      {
        past: true,
        type,
        properties: {
          date: 'May 25th',
          day: 10,
          fullTitle: 'Yellowstone, WY',
          id: 12,
          miles: 0,
          next: 13,
          photos: 1,
          prev: 11,
          slug: 'yellowstone',
          soundtrack: [
            {
              title: 'Johnny Cash - Jackson',
              img: 'johnny.jpg'
            }
          ],
          title: 'Yellowstone',
          why: 'It\'s fucking Yellowstone man. Do you need a reason why?'
        },
        geometry: {
          type: geometryType,
          coordinates: [-110.588454, 44.427968]
        }
      },
      {
        past: true,
        type,
        properties: {
          date: 'May 25th',
          day: 11,
          fullTitle: 'Missoula, MT',
          id: 13,
          miles: 450,
          next: 14,
          photos: 21,
          prev: 12,
          slug: 'missoula',
          title: 'Missoula',
          why: 'It\'s halfway between Seattle and the Tetons and our friend has a friend who\'s a baker here'
        },
        geometry: {
          type: geometryType,
          coordinates: [-114.05388, 46.8837455]
        }
      },
      {
        past: true,
        type,
        properties: {
          date: 'May 26th',
          day: 12,
          fullTitle: 'Spokane, WA',
          id: 14,
          media: [
            '<iframe width="711" height="400" src="https://www.youtube.com/embed/hxakzAhJuc0?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>'
          ],
          miles: 213,
          next: 15,
          photos: 24,
          prev: 13,
          slug: 'spokane',
          soundtrack: [
            {
              title: 'Jimmie Dale Gilmore - Goodbye to Old Missoula',
              img: 'jimmie-dale.jpg'
            }
          ],
          title: 'Spokane',
          why: 'A random state park we found'
        },
        geometry: {
          type: geometryType,
          coordinates: [-117.5473512, 47.7764107]
        }
      },
      {
        past: true,
        type,
        properties: {
          date: 'May 27th',
          day: 13,
          fullTitle: 'Seattle, WA',
          id: 15,
          miles: 273,
          next: 16,
          photos: 22,
          prev: 14,
          slug: 'seattle',
          soundtrack: [
            { title: 'Nirvana - Where Did You Sleep Last Night', img: 'nirvana.jpg' },
            { title: 'Pearl Jam - Better Man', img: 'pearl-jam.jpg' },
            { title: 'Sunny Day Real Estate - Guitar and Video Games', img: 'sunny-day-real-estate.jpg' },
            { title: 'Presidents of the United States - Dune Buggy', img: 'pusa.jpg' },
          ],
          title: 'Seattle',
          why: 'Lillian used to live here and wants to share it with Caleb.'
        },
        geometry: {
          type: geometryType,
          coordinates: [-122.332071, 47.606209]
        }
      },
      {
        past: true,
        type,
        properties: {
          date: 'May 28th',
          day: 14,
          fullTitle: 'Olympic National Park, WA',
          id: 16,
          miles: 237,
          next: 17,
          photos: 37,
          prev: 15,
          slug: 'olympic-national-park',
          soundtrack: [
            { title: 'Arcade Fire - Here Comes the Night Time', img: 'arcade-fire.jpg' },
            { title: 'Disclosure - Elevation', img: 'disclosure.jpg' },
            { title: 'Toto - Africa', img: 'toto.jpg' },
          ],
          title: 'Olympic National Park',
          why: 'To make up for missing out on Yellowstone and because it has so many big trees, multiple climates, and it\'s close to Seattle'
        },
        geometry: {
          type: geometryType,
          coordinates: [-123.6043524, 47.8021067]
        }
      },
      {
        past: true,
        type,
        properties: {
          date: 'May 30th',
          day: 16,
          fullTitle: 'Portland, OR',
          id: 17,
          miles: 262,
          next: 18,
          photos: 14,
          prev: 16,
          slug: 'portland',
          soundtrack: [
            { title: 'The Decemberists - Here I Dreamt I was An Architect', img: 'decemberists.jpg' },
            { title: 'Tame Impala — The Less I Know the Better', img: 'tame-impala.jpg' },
          ],
          title: 'Portland',
          why: 'The Austin of the PNW, Caleb\'s cousin lives here and they have great coffee and beer.'
        },
        geometry: {
          type: geometryType,
          coordinates: [-122.676482, 45.523062]
        }
      },
      {
        past: true,
        type,
        properties: {
          date: 'June 1st',
          day: 17,
          fullTitle: 'Redwood State Park, CA',
          id: 18,
          miles: 372,
          next: 19,
          photos: 20,
          prev: 17,
          slug: 'redwood-state-park',
          soundtrack: [
            { title: 'Phantom Planet - California', img: 'phantom-planet.jpg' },
            { title: 'Tupac & Dre - California Love', img: 'dre-tupac.jpg' },
            { title: 'Billy Bragg and Wilco - California Stars', img: 'billy-bragg-wilco.jpg' },
          ],
          title: 'Redwood State Park',
          why: 'Randomly found this park as a halfway '
        },
        geometry: {
          type: geometryType,
          coordinates: [-124.0746675, 41.2131576]
        }
      },
      {
        past: true,
        type,
        properties: {
          date: 'June 2nd',
          day: 18,
          fullTitle: 'Napa Valley State Park, CA',
          id: 19,
          miles: 331,
          next: 20,
          photos: 14,
          prev: 18,
          slug: 'napa-valley-state-park',
          soundtrack: [
            { title: 'Decemberists - California One/Youth and Beauty Brigade', img: 'decemberists.jpg' },
          ],
          title: 'Napa Valley',
          why: 'We decided to skip San Fran because we go there fairly frequently and do Napa since we have never been there.'
        },
        geometry: {
          type: geometryType,
          coordinates: [-122.522049, 38.5516923]
        }
      },
      {
        past: true,
        type,
        properties: {
          date: 'June 3rd',
          day: 19,
          fullTitle: 'Los Angeles, CA',
          id: 20,
          miles: 457,
          next: 21,
          photos: 14,
          prev: 19,
          slug: 'los-angeles',
          soundtrack: [
            { title: 'The Beach Boys - Wouldn\'t It Be Nice', img: 'beach-boys.jpg' },
            { title: 'The Beatles — Sun King', img: 'beatles.jpg' },
          ],
          title: 'Los Angeles',
          why: 'Lillian\'s cousin and childhood friend lives here. And Caleb wants to see palm trees.'
        },
        geometry: {
          type: geometryType,
          coordinates: [-118.243685, 34.052234]
        }
      },
      {
        past: true,
        type,
        properties: {
          date: 'June 5th',
          day: 21,
          fullTitle: 'Palm Springs, CA',
          id: 21,
          miles: 107,
          next: 22,
          photos: 8,
          prev: 20,
          slug: 'palm-springs',
          soundtrack: [
            { title: 'Guy Clark - L.A. Freeway', img: 'guy-clark.jpg' },
            { title: 'Beck — Where It\'s At', img: 'beatles.jpg' },
          ],
          title: 'Palm Springs',
          why: 'We\'ve never been and we hear it\'s FABULOUS.'
        },
        geometry: {
          type: geometryType,
          coordinates: [-116.7040323, 33.7715534]
        }
      },
      {
        current: true,
        type,
        properties: {
          date: 'June 6th',
          day: 22,
          fullTitle: 'Taliesin West, AZ',
          id: 22,
          miles: 324,
          next: 23,
          photos: 30,
          prev: 21,
          slug: 'taliesin-west',
          title: 'Taliesin West',
          why: 'We really enjoyed Taliesin, so we added FLW\'s winter location.'
        },
        geometry: {
          type: geometryType,
          coordinates: [-111.844977, 33.606281]
        }
      },
      {
        upcoming: true,
        type,
        properties: {
          date: 'June 7th',
          day: 23,
          fullTitle: 'Grand Canyon, AZ',
          id: 23,
          miles: 259,
          next: 24,
          prev: 22,
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
          day: 21,
          fullTitle: 'Antelope Canyon, AZ',
          id: 24,
          miles: 100,
          next: 25,
          prev: 23,
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
          day: 22,
          fullTitle: 'Albuquerque, NM',
          id: 25,
          miles: 186,
          next: 26,
          prev: 24,
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
          day: 23,
          fullTitle: 'Carlsbad, NM',
          id: 26,
          miles: 708,
          next: 27,
          prev: 25,
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
          date: 'June 8th',
          day: 25,
          fullTitle: 'Big Bend National Park, TX',
          id: 27,
          miles: 250,
          next: 28,
          prev: 26,
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
        upcoming: true,
        type,
        properties: {
          date: 'June 7th',
          day: 24,
          fullTitle: 'Marfa, TX',
          id: 28,
          miles: 98,
          next: 29,
          prev: 27,
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
        atx: true,
        type,
        properties: {
          date: 'June 15th',
          day: 31,
          fullTitle: 'Austin, TX',
          id: 29,
          miles: 435,
          next: 1,
          prev: 28,
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
