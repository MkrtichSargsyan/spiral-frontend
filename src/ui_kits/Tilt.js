/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';

import PropTypes from 'prop-types';

function Tilt(props) {
  const { options, ...rest } = props;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return <div ref={tilt} {...rest} />;
}

Tilt.propTypes = {
  options: PropTypes.instanceOf(Object).isRequired,
};

export default Tilt;
