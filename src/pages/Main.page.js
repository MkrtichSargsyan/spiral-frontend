import React from 'react';
import AboutUs from '../components/AboutUs';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Showcase from '../components/Showcase';
import Testimonials from '../components/Testimonials';
import WhatWeDo from '../components/WhatWeDo';

function MainPage() {
  return (
    <div className="relative">
      <Header />
      <Showcase />
      <AboutUs />
      <WhatWeDo />
      <Testimonials />
      <SearchBar />
      <Footer />
    </div>
  );
}

export default MainPage;
