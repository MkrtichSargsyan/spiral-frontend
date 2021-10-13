/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

const Backdrop = (props) => (
  <div
    className="h-full w-full fixed z-50 left-0 top-0 bg-black opacity-90"
    onClick={props.clicked}
  />
);

export default Backdrop;
