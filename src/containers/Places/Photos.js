import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import './Photos.scss';
import { Close } from '../../components/Icons';
import { placeCloseMedia } from '../../redux/modules/actions';

@connect(
  state => ({
    mediaOpen: state.place.mediaOpen
  }),
  {
    placeCloseMedia
  }
)
export default class Photos extends Component {
  static propTypes = {
    mediaOpen: PropTypes.bool.isRequired,
    placeCloseMedia: PropTypes.func.isRequired,
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

    return (
      <div>
        {this.imgs(place)}
        <a className="photos__close" onClick={this.props.placeCloseMedia}>
          <Close />
        </a>
      </div>
    );
  }
}
