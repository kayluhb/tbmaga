import Helmet from 'react-helmet';
import React, { Component, PropTypes } from 'react';

import './Photos.scss';

export default class Photos extends Component {
  static propTypes = {
    place: PropTypes.object.isRequired
  }

  componentDidMount() {
    if (typeof instgrm === 'undefined') {
      return;
    }
    instgrm.Embeds.process();
  }

  imgs(place) {
    const { photos, media, slug, title } = place.properties;

    if (photos === undefined || photos < 1) {
      return [];
    }

    return (
      <ul className="photos__list">
        {media.map((content, idx) =>
          <li
            className="photos__item photos__item--media"
            dangerouslySetInnerHTML={{ __html: content }}
            key={`media-${idx}`}
          />
        )}
        {Array(photos).fill().map((i, idx) =>
          <li className="photos__item" key={`img-${idx}`}>
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
