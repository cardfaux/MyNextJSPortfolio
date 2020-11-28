import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.scss';

import Navbar from '../components/Shared/Navbar';
import Hero from '../components/Shared/Hero';
import Footer from '../components/Shared/Footer';

const MyApp = ({ Component, pageProps }) => {
  console.log(Component);
  return (
    <div className="portfolio-app">
      <Navbar />
      { Component.name === 'Home' && <Hero /> }
      <div className="container">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  )
}

export default MyApp;
