import React, { PropTypes } from 'react';

export default function Icon({ children, className, viewBox }) {
  return (
    <svg className={className} viewBox={viewBox} xmlns="http://www.w3.org/2000/svg">
      {children}
    </svg>
  );
}

Icon.propTypes = {
  children: PropTypes.object.isRequired,
  className: PropTypes.string,
  viewBox: PropTypes.string
};

Icon.defaultProps = { viewBox: '0 0 24 24' };
