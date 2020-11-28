/* eslint-disable react/prop-types */
import React from 'react';
import App from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.scss';

import Navbar from '../components/Shared/Navbar';
import Hero from '../components/Shared/Hero';
import Footer from '../components/Shared/Footer';

const MyApp = ({ Component, pageProps }) => {
  console.log(Component);
  return (
    <div className='portfolio-app'>
      <Navbar />
      {Component.name === 'Home' && <Hero />}
      <div className='container'>
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
};

MyApp.getInitialProps = async (context) => {
  const initialProps = App.getInitialProps && (await App.getInitialProps(context));
  console.log(initialProps);

  return {
    pageProps: { appData: 'Hello _App Component', ...initialProps.pageProps },
  };
};

export default MyApp;
