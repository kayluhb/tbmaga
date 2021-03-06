import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import './Nav.scss';
import { Icon } from '../Icons';

/* eslint-disable react/prefer-stateless-function */
@connect(state => ({
  nextSlug: state.map.nextSlug,
  prevSlug: state.map.prevSlug,
}))
export default class Nav extends Component {
  static propTypes = {
    nextSlug: PropTypes.string.isRequired,
    prevSlug: PropTypes.string.isRequired
  }

  render() {
    const { nextSlug, prevSlug } = this.props;
    return (
      <nav className="nav">
        <Link className="nav__prev" to={prevSlug} title="Previous city">
          <Icon>
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          </Icon>
        </Link>
        <Link className="nav__next" to={nextSlug} title="Next city">
          <Icon>
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
          </Icon>
        </Link>
      </nav>
    );
  }
}
