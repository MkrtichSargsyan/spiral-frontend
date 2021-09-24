import React from 'react';
import AboutUs from '../components/AboutUs';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Showcase from '../components/Showcase';

function MainPage() {
  return (
    <div className="relative">
      <Header />
      <Showcase />
      <AboutUs/>
      <div className='h-36 bg-red-800'></div>
      <Footer />
    </div>
  );
}

export default MainPage;
