import React from 'react';
import whatWeDoBg from '../../images/whatWeDo.jpeg';

function WhatWeDo() {
  return (
    <section
      className="bg-gray-300 w-full flex items-center relative p-10 pb-32 min-h-screen"
      style={{
        height: '130vh',
      }}
    >
      <div
        className="w-2/3 flex items-center h-full"
        style={{
          backgroundSize: 'cover',
          backgroundImage: `url(${whatWeDoBg})`,
        }}
      >
        <p className="text-white text-4xl ml-8 font-bold">
          We have been serving since 1888
        </p>
      </div>
      <div className="border bg-white rounded-md p-10 w-2/6 ml-8 absolute right-40 shadow-2xl">
        <h3 className="mb-6">WHAT WE DO</h3>
        <p className="mb-6">
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
    </section>
  );
}

export default WhatWeDo;
