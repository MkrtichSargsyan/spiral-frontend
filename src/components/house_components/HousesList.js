import React from 'react';
import HousePreview from './HousePreview';

function HousesList({ allHouses }) {
  return (
    <div className="border-1 border-black flex w-full flex-wrap">
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

export default HousesList;
