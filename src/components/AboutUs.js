import React from 'react';
import { Link } from 'react-router-dom';
import AnimButton from '../ui_kits/AnimButton';

function AboutUs() {
  return (
    <section className="bg-gray-300 flex items-center flex-col py-20 pt-56">
      <h2 className="text-4xl text-gray-400 mt-16 mb-2 relative">About Us</h2>
      <hr className="w-10 mb-10" />
      <p className="w-2/5 text-xl text-center">
        <span className="text-2xl font-bold italic mr-2">Spiral</span> is a
        full-service Residential, Commercial and Real Estate Management company
        serving Yerevan since 1888. At <span className="italic">Spiral</span>{' '}
        our focus is on delivering personable, reliable service with integrity
        to our clients. We stand behind our partnerships and we stake our
        reputation on the relationships we build.
      </p>
      <AnimButton link="/about" text="ABOUT US" />
    </section>
  );
}

export default AboutUs;
