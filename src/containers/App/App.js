import classNames from 'classnames';
import Helmet from 'react-helmet';
import React, { Component, PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux';

import './App.scss';
import config from '../../config';
import { Header, Footer, Menu, Legend, Mapp, Nav } from '../../components';
import { PLACES } from '../../redux/modules/map';

/* eslint-disable react/prefer-stateless-function */
@connect(state => ({
  open: state.place.open
}))
export default class App extends Component {
  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  static propTypes = {
    children: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    open: PropTypes.bool.isRequired
  };

  render() {
    const { children, location, open } = this.props;
    const { pathname } = location;
    const isPlaces = pathname.startsWith(`/${PLACES}`);
    const isHome = pathname === '/';
    const klass = classNames({
      'map--collapsed': (!isHome && !isPlaces),
      'map--placed': (isPlaces || isHome) && open
    });

    return (
      <div className={klass}>
        <Helmet {...config.app.head} />
        <Header />
        <Menu />
        <div className="wrap">
          <Nav />
          <Legend />
          <Mapp key="map" />
          <ReactCSSTransitionGroup
            component="div"
            transitionName="page"
            transitionEnterTimeout={100}
            transitionLeaveTimeout={600}
          >
            {React.cloneElement(children, {
              key: location.pathname
            })}
          </ReactCSSTransitionGroup>
        </div>
        <Footer />
      </div>
    );
  }
}
