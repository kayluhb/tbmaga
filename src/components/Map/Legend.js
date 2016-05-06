import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import './Legend.scss';
import { getTotalMiles } from '../../redux/modules/map';

@connect(state => ({
  totalMiles: state.map.totalMiles,
  place: state.map.place,
  places: state.map.places.features
}))
export default class Legend extends Component {
  static propTypes = {
    totalMiles: PropTypes.number.isRequired,
    place: PropTypes.object.isRequired,
    places: PropTypes.array.isRequired
  }

  milesToPercent(totalMiles, miles) {
    return `${miles / totalMiles * 100}%`;
  }

  miles(places, totalMiles) {
    const mis = [];
    let left = 0;
    for (let i = 1; i < places.length - 1; ++i) {
      const place = places[i];
      left += place.properties.miles;
      mis.push(
        <div
          key={place.properties.miles}
          className="legend__mile"
          style={{ left: this.milesToPercent(totalMiles, left) }}
        />
      );
    }
    return mis;
  }

  render() {
    const { totalMiles, places } = this.props;
    const { id } = this.props.place.properties;
    const currentTotalMiles = getTotalMiles(id);

    return (
      <div className="legend">
        <div
          className="legend__total"
          style={{ width: this.milesToPercent(totalMiles, currentTotalMiles) }}
        />
        {this.miles(places, totalMiles)}
      </div>
    );
  }
}
