/* eslint-disable react/prop-types */
import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.scss';

import Navbar from '../components/Shared/Navbar';
import Hero from '../components/Shared/Hero';
import Footer from '../components/Shared/Footer';

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache(),
});

const MyApp = ({ Component, pageProps }) => {
  console.log(Component);
  return (
    <ApolloProvider client={client}>
      <div className='portfolio-app'>
        <Navbar />
        {Component.name === 'Home' && <Hero />}
        <div className='container'>
          <Component {...pageProps} />
        </div>
        {Component.name === 'Home' && <Footer />}
      </div>
    </ApolloProvider>
  );
};

export default MyApp;
