/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import whatWeDoBg from '../../images/whatWeDo.jpeg';

function WhatWeDo() {
  return (
    <section className="mb- md:mb-44 lg:mb-0 bg-gray-300 w-full flex flex-col md:flex-row items-center px-2 md:px-10 h-screen">
      <div
        className="w-full lg:w-10/12 flex items-center h-96 md:h-5/6 relative"
        style={{
          backgroundSize: 'cover',
          backgroundImage: `url(${whatWeDoBg})`,
        }}
      >
        <p className="w-full text-center lg:w-2/3 lg:text-left lg:ml-8 text-white text-4xl font-bold">
          We have been serving since 1888
        </p>
        <div
          className="p-10
          mx-auto
          absolute
          top-2/3
          w-11/12
          lg:w-6/12
          inset-x-0
          border
        bg-white
          shadow-2xl
          lg:top-auto
          lg:my-auto
          lg:h-4/5
          lg:left-2/3"
        >
          <h3 className="mb-6 font-serif">WHAT WE DO</h3>
          <p className="mb-6 font-serif">
            Founded in 1888 Spiral Real Estate Agency is one of the leading real
            estate companies in Armenia in terms of quality of services and
            accessibility. Our agency's specialists will help you in finding a
            real estate in Yerevan and the regions of Armenia that meet your
            preferences, including an apartment, office and commercial space, a
            private house, and or land.
          </p>
          <ul className="services">
            <li className="mb-3">Residential Real Estate</li>
            <li className="mb-3">Rentals and Property Management</li>
            <li className="mb-3">
              Commercial Real Estate Brokerage and Property Management
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default WhatWeDo;
