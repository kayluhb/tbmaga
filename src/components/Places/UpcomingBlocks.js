import React, { PropTypes } from 'react';

import Block from './Block';
import { Car, Day } from '../Icons';
import { getTotalMiles } from '../../redux/modules/map';

export default function UpcomingBlocks({ place }) {
  const { day, date, id, miles, title, why } = place.properties;
  const totalMiles = getTotalMiles(id);

  /* eslint-disable max-len */
  return (
    <div className="blocks">
      <Block
        className="block--large"
        icon={<Day className="block__icon" />}
        label="Estimated day"
        stat={day}
      />
      <Block
        className="block--small"
        icon={<Day className="block__icon" />}
        label="Estimated date"
        stat={date}
      />
      <Block
        icon={<Car className="block__icon" />}
        label="Since last stop"
        stat={[miles, <span key="mi">mi</span>]}
      />
      <Block
        icon={<Car className="block__icon" />}
        label="Estimated total"
        stat={[totalMiles, <span key="mi">mi</span>]}
      />
      <div className="block block--full">
        <span className="block__label">Why {title}?</span>
        <p>{why}</p>
      </div>
    </div>
  );
}

UpcomingBlocks.propTypes = {
  place: PropTypes.object.isRequired
};
