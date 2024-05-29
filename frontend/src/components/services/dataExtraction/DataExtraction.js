import React, { useState, useEffect } from 'react';
import NavBar from '../../core/NavBar';
import Hero from './Hero';
import Info from './Info';
import QuoteForm from './QuoteForm';
import Footer from '../../core/Footer';

const DataExtraction = () => {

  useEffect(() => {
    document.title = 'SavviLabs - Data Extraction';
  }, []);

  return (
    <div>

    <NavBar />
    <Hero />
    <Info />
    <QuoteForm />
    <Footer />

    </div>

  );
};

export default DataExtraction;
