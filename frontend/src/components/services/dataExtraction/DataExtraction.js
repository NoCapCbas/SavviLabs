import React, { useState, useEffect, useRef } from 'react';
import Hero from './Hero';
import Info from './Info';
import QuoteForm from './QuoteForm';

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

    <Hero scrollToComponent={scrollToComponent}/>
    <Info />
    <QuoteForm ref={targetRef}/>

    </div>

  );
};

export default DataExtraction;
