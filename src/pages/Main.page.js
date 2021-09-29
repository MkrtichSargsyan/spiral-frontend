import React from 'react';
import AboutUs from '../components/mainPage_components/AboutUs';
import SearchBar from '../components/mainPage_components/SearchBar';
import Showcase from '../components/mainPage_components/Showcase';
import Testimonials from '../components/mainPage_components/Testimonials';
import WhatWeDo from '../components/mainPage_components/WhatWeDo';

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
