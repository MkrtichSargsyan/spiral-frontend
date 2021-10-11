import React, { useEffect } from 'react';
import re3 from '../images/realEstate/re3.jpg';

function AboutUsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section
        className="relative bg-no-repeat bg-cover flex justify-center flex-col items-center"
        style={{
          height: '80vh',
          width: '100%',
          transition: 'all 2s ease-in-out',
          backgroundSize: 'cover',
          backgroundImage: `url(${re3})`,
        }}
      >
        <div className="text-center z-40 w-full flex flex-col items-center">
          <h1 className="text-6xl text-white mb-3 font-caramel">About Us</h1>
        </div>
        <div className="w-full h-full bg-black absolute z-10 opacity-90"></div>
      </section>
      <section className="bg-gray-300 flex flex-col items-center p-2 md:p-24">
        <p className="mt-10 md:mt-0 w-full md:w-3/5 text-xl text-center mb-5">
          <span className="text-2xl font-bold italic mr-2">Spiral</span> is a
          full-service Residential, Commercial and Real Estate Management
          company serving Yerevan since 1888. At{' '}
          <span className="italic">Spiral</span> our focus is on delivering
          personable, reliable service with integrity to our clients. We stand
          behind our partnerships and we stake our reputation on the
          relationships we build.
        </p>
        <p className="mb-10 md:mb-0 w-full md:w-3/5 text-center text-red-800">
          At <span className="text-2xl font-bold italic mr-2">Spiral</span> and
          our affiliated companies we are focused on delivering personable,
          reliable service with integrity to our clients. We stand behind our
          partnerships, and we stake our reputation on the relationships that we
          build.
        </p>
      </section>
    </>
  );
}

export default AboutUsPage;
