import classNames from 'classnames';
import Helmet from 'react-helmet';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import './Place.scss';
import { Icon } from '../../components/Icons';
import { PlaceBlocks, PlaceUpcomingBlocks } from '../../components';
import { load, placeToggle } from '../../redux/modules/actions';
import Photos from './Photos';

/* eslint-disable max-len */
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
export default class Place extends Component {
  static propTypes = {
    load: PropTypes.func.isRequired,
    open: PropTypes.bool,
    params: PropTypes.object.isRequired,
    place: PropTypes.object.isRequired,
    placeToggle: PropTypes.func.isRequired
  }

  componentDidMount() {
    const { place, slug } = this.props.params;

    if (slug === undefined) {
      return;
    }

    if (place !== undefined && place.properties.slug === slug) {
      return;
    }

    this.props.load(slug);
  }

  // shouldComponentUpdate(nextProps) {
  //   console.log(nextProps.params.slug, this.props.place.properties.slug);
  //   return true;
  // }

  render() {
    const { open, place } = this.props;
    const { current } = place;
    const { fullTitle, slug } = place.properties;
    const { subdir } = this.props.params;
    const blocks = place.upcoming || place.atx ? <PlaceUpcomingBlocks {...this.props} /> :
      <PlaceBlocks {...this.props} />;
    const tip = open ? 'View map full screen' : 'View place information';
    const subtitle = current ? <h2 className="place__header__subtitle">Current place</h2> : null;
    const hasPhotos = subdir === 'photos';
    const photos = hasPhotos ? <Photos place={place} /> : null;
    const klass = classNames('place-wrap', { 'place-wrap--open': open }, { 'place-wrap--photos': hasPhotos });
    const description = `${hasPhotos ? 'Photos from when ' : ''}Lillian and Caleb stop in ${fullTitle}`;

    return (
      <div className={klass}>
        <a className="place-wrap__toggle" onClick={this.props.placeToggle} title={tip}>
          <Icon className="place-wrap__toggle__icon place-wrap__toggle__info">
            <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
          </Icon>
          <Icon className="place-wrap__toggle__icon place-wrap__toggle__close">
            <path d="M20.5,3L20.34,3,15,5.1,9,3,3.36,4.9A0.5,0.5,0,0,0,3,5.38V20.5a0.5,0.5,0,0,0,.5.5l0.16,0L9,18.9,15,21l5.64-1.9A0.5,0.5,0,0,0,21,18.62V3.5A0.5,0.5,0,0,0,20.5,3ZM15,19L9,16.89V5l6,2.11V19Z" />
          </Icon>
        </a>
        <main className="place">
          <Helmet
            title={`${hasPhotos ? 'Photos from ' : ''}${fullTitle}`}
            meta={[
                { name: 'description', content: description },
                { property: 'og:description', content: description },
                { property: 'og:image', content: `http://thebrownsmakeamericagreatagain.com/images/${slug}/share.jpg` },
            ]}
          />
          <header className="place__header">
            {subtitle}
            <h1 className="place__header__title">
              {fullTitle}
            </h1>
            <div className="place__header__bg" style={{ backgroundImage: `url(/images/cities/${slug}.jpg)` }}></div>
          </header>
          {blocks}
          <div className="place__photos">
            {photos}
          </div>
        </main>
      </div>
    );
  }
}
