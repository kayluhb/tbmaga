import classNames from 'classnames';
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import './Blocks.scss';
import Block from './Block';
import { Car, Day, Icon, Photo } from '../Icons';
import { getTotalMiles } from '../../redux/modules/map';

export default class Blocks extends Component {
  static propTypes = {
    place: PropTypes.object.isRequired
  };

  firstPlace(id) {
    return id === 1;
  }

  mileBlock(place) {
    const { id, miles } = place.properties;

    if (this.firstPlace(id)) {
      return [];
    }

    return (
      <Block
        icon={<Car className="block__icon" />}
        label="Distance since last city"
        stat={[miles, <span key="mi">mi</span>]}
      />
    );
  }

  totalMilesBlock(place) {
    const { id } = place.properties;

    if (this.firstPlace(id)) {
      return [];
    }

    const totalMiles = getTotalMiles(id);

    return (
      <Block
        icon={<Car className="block__icon" />}
        label="Total miles"
        stat={[totalMiles, <span key="mi">mi</span>]}
      />
    );
  }

  photoBlock(place, blockFullClass) {
    const { photos, slug, title } = place.properties;

    if (photos === undefined || photos < 1) {
      return [];
    }

    return (
      <Link
        className={classNames([blockFullClass, 'block--photos'])}
        to={`/places/${slug}/photos`}
      >
        <span className="block__label">
          <Photo className="block__icon" />
          Media
        </span>
        <ul className="block--photos__list">
          {Array(photos).fill().map((i, idx) =>
            <li key={idx}>
              <img src={`/images/${slug}/${(idx + 1)}_th.jpg`} alt={title} />
            </li>
          )}
        </ul>
      </Link>
    );
  }

  soundtrackBlock(place, blockFullClass) {
    const { soundtrack } = place.properties;

    if (soundtrack === undefined || soundtrack < 1) {
      return [];
    }

    return (
      <div className={classNames([blockFullClass, 'block--soundtrack'])}>
        <span className="block__label">
          <Icon className="block__icon">
            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
          </Icon>
          Soundtrack
        </span>
        <ul className="block--soundtrack__list">
          {soundtrack.map((item, idx) =>
            <li key={idx}>
              <a
                className="block--soundtrack__item"
                href={`https://www.youtube.com/results?search_query=${item.title}`}
                target="_blank"
                title={item.title}
              >
                <img
                  alt={item.title}
                  className="block--soundtrack__img"
                  src={`/images/soundtrack/${item.img}`}
                />
                {item.title}
              </a>
            </li>
          )}
        </ul>
      </div>
    );
  }

  render() {
    const { place } = this.props;
    const { day, date, id, title, why } = place.properties;
    const blockFullClass = 'block block--full';
    const dateLabel = this.firstPlace(id) ? 'Departure date' : 'Arrival date';

    /* eslint-disable max-len */
    return (
      <div className="blocks">
        <Block
          className="block--large"
          icon={<Day className="block__icon" />}
          label="Day into trip"
          stat={day}
        />
        <Block
          className="block--small"
          icon={<Day className="block__icon" />}
          label={dateLabel}
          stat={date}
        />
        {this.mileBlock(place)}
        {this.totalMilesBlock(place)}
        {this.photoBlock(place, blockFullClass)}
        <div className={blockFullClass}>
          <span className="block__label">Why {title}?</span>
          <p>{why}</p>
        </div>
        {this.soundtrackBlock(place, blockFullClass)}
      </div>
    );
  }
}
