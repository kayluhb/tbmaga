import React, { PropTypes } from 'react';

import Icon from './Icon';

/* eslint-disable max-len */
export default function Photo({ className }) {
  return (
    <Icon className={className}>
      <path d="M21,19V5a2,2,0,0,0-2-2H5A2,2,0,0,0,3,5V19a2,2,0,0,0,2,2H19A2,2,0,0,0,21,19ZM8.5,13.5l2.5,3L14.5,12,19,18H5Z" />
    </Icon>
  );
}

Photo.propTypes = {
  className: PropTypes.string
};
