import classNames from 'classnames';
import React, { PropTypes } from 'react';

export default function Block({ full, icon, label, stat, className }) {
  const klass = classNames('block', { 'block--full': full }, className);
  return (
    <div className={klass}>
      <span className="block__label">
        {icon}
        {label}
      </span>
      <span className="block__stat">
        {stat}
      </span>
    </div>
  );
}

Block.propTypes = {
  className: PropTypes.string,
  full: PropTypes.bool,
  icon: PropTypes.object,
  label: PropTypes.string,
  stat: PropTypes.any
};
