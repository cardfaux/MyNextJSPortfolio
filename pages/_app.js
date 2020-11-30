/* eslint-disable react/prop-types */
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.scss';

import Navbar from '../components/Shared/Navbar';
import Hero from '../components/Shared/Hero';
import Footer from '../components/Shared/Footer';

const MyApp = ({ Component, pageProps }) => {
  return (
    <div className='portfolio-app'>
      <Navbar />
      {Component.name === 'Home' && <Hero />}
      <div className='container'>
        <Component {...pageProps} />
      </div>
      {Component.name === 'Home' && <Footer />}
    </div>
  );
};

export default MyApp;
