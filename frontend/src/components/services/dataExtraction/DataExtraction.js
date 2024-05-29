import React, { useState, useEffect, useRef } from 'react';
import NavBar from '../../core/NavBar';
import Hero from './Hero';
import Info from './Info';
import QuoteForm from './QuoteForm';
import Footer from '../../core/Footer';

const DataExtraction = () => {

  const targetRef = useRef(null);

  const scrollToComponent = () => {
    targetRef.current.scrollIntoView({behavior:"smooth"});
  }

  useEffect(() => {
    document.title = 'SavviLabs - Data Extraction';
  }, []);

  return (
    <div>

    <NavBar />
    <Hero scrollToComponent={scrollToComponent}/>
    <Info />
    <QuoteForm ref={targetRef}/>
    <Footer />

    </div>

  );
};

export default DataExtraction;
