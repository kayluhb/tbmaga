import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import './Map.scss';
import { Icon } from '../Icons';
import { getPlaceSlug } from '../../redux/modules/map';

@connect(state => ({
  center: state.map.center,
  places: state.map.places,
  place: state.map.place,
  zoom: state.map.zoom
}))
export default class Map extends Component {
  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  static propTypes = {
    center: PropTypes.array.isRequired,
    places: PropTypes.object.isRequired,
    place: PropTypes.object.isRequired,
    zoom: PropTypes.number.isRequired
  }

  constructor() {
    super();
    this.map = null;
    this.onClick = this.onClick.bind(this);
    this.onLoad = this.onLoad.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);

    this.ATX = 'atx';
    this.CURRENT = 'current';
    this.PAST = 'past';
    this.SELECTED = 'selected';
    this.STYLE = 'mapbox://styles/kayluhb1134/cimwgltr1010sb8m7n4i5umys';
    this.TOKEN = 'pk.eyJ1Ijoia2F5bHVoYjExMzQiLCJhIjoiY2ltZjl6cmM2MDA1cHZ1bTM0a2w2cGwxaiJ9.iKa0bOctSNv1TxcLq5enpg';
    this.UPCOMING = 'upcoming';
  }

  componentDidMount() {
    if (this.map !== null) {
      return;
    }
    const { center, zoom } = this.props;
    const container = document.getElementById('map-wrap');

    container.addEventListener('transitionend', () => {
      this.map.resize();
    }, false);

    mapboxgl.accessToken = this.TOKEN;

    this.map = new mapboxgl.Map({
      center,
      container: 'map',
      maxZoom: 13.5,
      minZoom: 3,
      style: this.STYLE,
      zoom
    });

    this.map
      .on('click', this.onClick)
      .on('mousemove', this.onMouseMove)
      .on('style.load', this.onLoad);
  }

  onClick(event) {
    // Use queryRenderedFeatures to get features at a click event's point
    // Use layer option to avoid getting results from other layers
    const features = this.map.queryRenderedFeatures(
      event.point,
      { layers: [this.ATX, this.PAST, this.CURRENT, this.UPCOMING] }
    );
    // if there are features within the given radius of the click event,
    // fly to the location of the click event
    if (features.length) {
      this.context.router.push({
        pathname: getPlaceSlug(features[0].properties.id)
      });
    }
  }

  onLoad() {
    this.addSources();
    this.addLayers();
    this.flyToCenter();
    this.highlightCurrent();
  }

  // Use the same approach as above to indicate that the symbols are clickable
  // by changing the cursor style to 'pointer'.
  onMouseMove(event) {
    const features = this.map.queryRenderedFeatures(
      event.point,
      { layers: [this.ATX, this.PAST, this.CURRENT, this.UPCOMING] }
    );
    this.map.getCanvas().style.cursor = features.length ? 'pointer' : '';
  }

  addLayers() {
    const type = 'symbol';
    const layout = {
      'icon-allow-overlap': true,
      'icon-image': 'place',
      'icon-offset': [0, -18],
      'text-anchor': 'top',
      'text-field': '{title}',
      'text-font': ['FreightSans Book'],
      'text-size': 14,
      'text-offset': [0, 0.2]
    };
    const paint = { 'text-color': '#fff' };
    // Add a layer showing the markers.
    this.map
      .addLayer({
        id: this.ATX,
        layout: Object.assign({}, layout, { 'icon-image': 'star', 'text-offset': [0, 0.4] }),
        paint: Object.assign({}, paint, { 'icon-opacity': 0.7 }),
        source: this.ATX,
        type
      })
      .addLayer({
        id: this.PAST,
        layout,
        paint,
        source: this.PAST,
        type
      })
      .addLayer({
        id: this.UPCOMING,
        layout,
        paint: Object.assign({}, paint, { 'icon-opacity': 0.5 }),
        source: this.UPCOMING,
        type
      })
      .addLayer({
        id: this.CURRENT,
        layout: Object.assign({}, layout, { 'icon-image': 'place-current' }),
        paint,
        source: this.CURRENT,
        type
      });
  }

  addSources() {
    const { places } = this.props;
    const { features } = places;
    const type = 'geojson';

    const atx = {
      ...places,
      features: features.filter(place => place.atx === true)
    };
    const current = {
      ...places,
      features: features.filter(place => place.current === true)
    };
    const past = {
      ...places,
      features: features.filter(place => place.past === true)
    };
    const upcoming = {
      ...places,
      features: features.filter(place => place.upcoming === true)
    };

    // Add marker data as a new GeoJSON source.
    this.map
      .addSource(this.ATX, { type, data: atx })
      .addSource(this.CURRENT, { type, data: current })
      .addSource(this.PAST, { type, data: past })
      .addSource(this.UPCOMING, { type, data: upcoming });
  }

  clearCurrent() {
    if (this.map.getSource(this.SELECTED) === undefined) {
      return;
    }

    this.map
      .removeLayer(this.SELECTED)
      .removeSource(this.SELECTED);
  }

  highlightCurrent() {
    const { place } = this.props;

    if (place.current || place.atx) {
      return;
    }

    this.map.addSource(
      this.SELECTED, {
        type: 'geojson',
        data: place
      }
    );
    const layout = {
      'icon-allow-overlap': true,
      'icon-image': 'place-on',
      'icon-offset': [0, -18],
    };
    const paint = { };

    this.map.addLayer({
      id: this.SELECTED,
      layout,
      paint,
      source: this.SELECTED,
      type: 'symbol'
    });
  }

  flyToCenter() {
    const { center, zoom } = this.props;
    this.map.flyTo({
      center,
      pitch: 45,
      zoom
    });
    this.map.resize();
  }

  render() {
    if (this.map !== null) {
      this.flyToCenter();
      this.clearCurrent();
      this.highlightCurrent();
    }

    return (
      <section className="map" id="map-wrap">
        <div className="map__map" id="map" />
        <Link className="map__back" to="/">
          <Icon className="map__back__icon">
            <path d="M4,12l1.41,1.41L11,7.83V20h2V7.83l5.58,5.59L20,12,12,4Z" />
          </Icon>
        </Link>
      </section>
    );
  }
}
