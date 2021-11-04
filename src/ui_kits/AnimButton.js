import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function AnimButton({ link, text }) {
  return (
    <Link to={link}>
      <div className="animButton">
        <span>{text}</span>
      </div>
    </Link>
  );
}

AnimButton.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default AnimButton;
