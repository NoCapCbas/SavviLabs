import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import Hero from './Hero';
import Pricing from './Pricing';
import Footer from './Footer';

const CodeLaunch = () => {

  useEffect(() => {
    document.title = 'CodeLaunch';
  }, []);

  return (
    <div>
    <NavBar />
    <Hero />
    <Pricing />
    <Footer />

    </div>

  );
};

export default CodeLaunch;
