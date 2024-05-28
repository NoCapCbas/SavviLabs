import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import Hero from './Hero';
import DataExtractionInfo from './DataExtractionInfo';
import QuoteForm from './QuoteForm';
import Footer from './Footer';

const DataExtraction = () => {

  useEffect(() => {
    document.title = 'SavviLabs - Data Extraction';
  }, []);

  return (
    <div>

    <NavBar />
    <Hero />
    <DataExtractionInfo />
    <Footer />

    </div>

  );
};

export default DataExtraction;
