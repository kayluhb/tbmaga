import Helmet from 'react-helmet';
import React, { Component, PropTypes } from 'react';

import './Photos.scss';

export default class Photos extends Component {
  static propTypes = {
    place: PropTypes.object.isRequired
  }

  imgs(place) {
    const { photos, slug, title } = place.properties;

    if (photos === undefined || photos < 1) {
      return [];
    }

    return (
      <ul className="photos__list">
        {Array(photos).fill().map((i, idx) =>
          <li className="photos__item" key={idx}>
            <img className="photos__img" src={`/images/${slug}/${(idx + 1)}.jpg`} alt={title} />
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
      <div className="photos">
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
