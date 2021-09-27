import React from 'react';
import AboutUs from '../components/AboutUs';
import SearchBar from '../components/SearchBar';
import Showcase from '../components/Showcase';
import Testimonials from '../components/Testimonials';
import WhatWeDo from '../components/WhatWeDo';

function MainPage() {
  return (
    <section className="relative">
      <Showcase />
      <AboutUs />
      <WhatWeDo />
      <Testimonials />
      <SearchBar />
    </section>
  );
}

export default MainPage;
