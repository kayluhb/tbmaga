import React, { PropTypes } from 'react';

import Icon from './Icon';

/* eslint-disable max-len */
export default function Car({ className }) {
  return (
    <Icon className={className}>
      <path d="M18.92,6A1.49,1.49,0,0,0,17.5,5H6.5A1.5,1.5,0,0,0,5.08,6L3,12v8a1,1,0,0,0,1,1H5a1,1,0,0,0,1-1V19H18v1a1,1,0,0,0,1,1h1a1,1,0,0,0,1-1V12ZM6.5,16A1.5,1.5,0,1,1,8,14.5,1.5,1.5,0,0,1,6.5,16Zm11,0A1.5,1.5,0,1,1,19,14.5,1.5,1.5,0,0,1,17.5,16ZM5,11L6.5,6.5h11L19,11H5Z" />
    </Icon>
  );
}

Car.propTypes = {
  className: PropTypes.string
};
