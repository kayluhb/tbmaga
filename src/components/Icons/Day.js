import React, { PropTypes } from 'react';

import Icon from './Icon';

/* eslint-disable max-len */
export default function Day({ className }) {
  return (
    <Icon className={className}>
      <path d="M19,3H18V1H16V3H8V1H6V3H5A2,2,0,0,0,3,5V19a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2V5A2,2,0,0,0,19,3Zm0,16H5V8H19V19ZM7,10h5v5H7V10Z" />
    </Icon>
  );
}

Day.propTypes = {
  className: PropTypes.string
};
