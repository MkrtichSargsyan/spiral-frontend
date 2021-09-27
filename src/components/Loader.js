import React from 'react';

function Loader() {
  return (
    <div className="loading flex justify-center items-center">
      <div className="loading-text">LOADING</div>
      <div className="ring"></div>
    </div>
  );
}

export default Loader;
