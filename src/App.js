import React from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import { ContactUs } from './components/ContactUs';

const App = () => {
  return (
    <div className='bg-site bg-no-repeat lg:pr-20 lg:pl-20 bg-cover overflow-hidden'>
      <Header />
      <Banner />
      <Nav />
      <Work />
      <About />
      <Services />
      <ContactUs />
    </div>
  );
};

export default App;