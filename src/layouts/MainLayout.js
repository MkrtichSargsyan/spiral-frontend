import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

function MainLayout(props) {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
}

export default MainLayout;
