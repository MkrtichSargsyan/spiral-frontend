import React from 'react';
import HousePreview from './HousePreview';
import PropTypes from 'prop-types';

function HousesList({ allHouses }) {
  return (
    <div className="py-4 md:py-0 border-1 border-black flex w-full flex-wrap">
      {allHouses &&
        allHouses.map((house) => (
          <HousePreview
            key={house.id}
            id={house.id}
            pictures={house.pictures}
            price={house.price}
            address={house.address}
            bedrooms={house.bedrooms}
            bathrooms={house.bathrooms}
          />
        ))}
    </div>
  );
}

HousesList.propTypes = {
  allHouses: PropTypes.instanceOf(Object).isRequired,
};

export default HousesList;
