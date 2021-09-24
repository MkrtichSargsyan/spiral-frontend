import React from 'react';
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

export default AnimButton;
