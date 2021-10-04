import React from 'react';

export const Backdrop = (props) => (
  <div
    className={'h-full w-full fixed z-50 left-0 top-0 bg-black opacity-90'}
    onClick={props.clicked}
  />
);
