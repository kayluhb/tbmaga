import React, { Component, PropTypes } from 'react';

import './Photos.scss';

export default class Photos extends Component {
  static propTypes = {
    place: PropTypes.object.isRequired
  }

  componentDidMount() {
    this.initMasonry();

    if (typeof instgrm === 'undefined') {
      return;
    }
    setTimeout(() => {
      instgrm.Embeds.process();
    }, 200);
  }

  /* eslint-disable */
  onImagesLoad(instance) {
    // console.log('all images are loaded', instance);
    new Masonry('.photos__list', {
      itemSelector: '.photos__item'
    });
  }

  initMasonry() {
    const photos = document.querySelectorAll('.photos__list');
    const imgLoad = imagesLoaded(photos);
    imgLoad.on('always', this.onImagesLoad);
  }
  /* eslint-enable */

  imgs(place) {
    const { photos, media, slug, title } = place.properties;

    if (photos === undefined || photos < 1) {
      return [];
    }

    let mediaEmbeds = null;
    if (media !== undefined) {
      mediaEmbeds = media.map((content, idx) =>
        <li
          className="photos__item photos__item--media"
          dangerouslySetInnerHTML={{ __html: content }}
          key={`media-${idx}`}
        />
      );
    }

    return (
      <ul className="photos__list">
        {mediaEmbeds}
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

    return (
      <div>
        {this.imgs(place)}
      </div>
    );
  }
}
