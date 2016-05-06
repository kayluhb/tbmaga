import classNames from 'classnames';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import './Menu.scss';
import { Close, Icon } from '../Icons';
import { menuToggle } from '../../redux/modules/actions';

@connect(state => ({ open: state.menu.open }), { menuToggle })
export default class Menu extends Component {
  static propTypes = {
    open: PropTypes.bool,
    menuToggle: PropTypes.func.isRequired
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.open !== this.props.open;
  }

  render() {
    const { open } = this.props;
    const klass = classNames('menu', { 'menu--open': open });
    const activeClass = 'menu__link--on';
    const linkClass = 'menu__link';

    /* eslint-disable max-len */
    return (
      <nav className={klass}>
        <a className="menu__toggle" onClick={this.props.menuToggle} title="Menu">
          <Icon className="menu__toggle__icon menu__toggle__menu">
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
          </Icon>
          <Close className="menu__toggle__icon menu__toggle__close" />
        </a>
        <ul className="menu__list">
          <li>
            <Link
              activeClassName={activeClass}
              className={linkClass}
              onlyActiveOnIndex
              to="/"
            >Home</Link>
          </li>
          <li>
            <Link
              activeClassName={activeClass}
              className={linkClass}
              to="/about"
            >About</Link>
          </li>
          <li>
            <Link
              activeClassName={activeClass}
              className={linkClass}
              to="/contact"
            >Contact</Link>
          </li>
        </ul>
      </nav>
    );
    /* eslint-enable */
  }
}
