import Helmet from 'react-helmet';
import React from 'react';
import { connect } from 'react-redux';

import Place from './Place';
import { load, placeToggle } from '../../redux/modules/actions';

@connect(
  state => ({
    place: state.map.place,
    open: state.place.open
  }),
  {
    load,
    placeToggle
  }
)
export default class Photos extends Place {
  imgs(place) {
    const { photos, slug, title } = place.properties;

    if (photos === undefined || photos < 1) {
      return [];
    }

    return (
      <ul className="block--photos__list">
        {Array(photos).fill().map((i, idx) =>
          <li key={idx}>
            <img src={`/images/${slug}/${(idx + 1)}.jpg`} alt={title} />
          </li>
        )}
      </ul>
    );
  }
  render() {
    const { place } = this.props;
    const { fullTitle } = place.properties;
    const description = `Photos : Lillian and Caleb stop in ${fullTitle}`;

    return (
      <div className="place__photos">
        <Helmet
          title={fullTitle}
          meta={[
              { name: 'description', content: description },
              { property: 'og:description', content: description },
          ]}
        />
        {this.imgs(place)}
      </div>
    );
  }
}
