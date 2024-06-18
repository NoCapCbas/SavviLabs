import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';

// Main app components
import Navbar from '../../core/Navbar';
import Footer from '../../core/Footer';

import DataExtraction from './components/services/dataExtraction/DataExtraction';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;


function App() {

  return (
    <Router>
      <Navbar />
        <main>
          <Routes>
            <Route path='/services/data-extraction' element={<DataExtraction />} />
           <Route path='/email-verifier' element={<DataExtraction />} />
           
          </Routes>
        </main>
      <Footer />
    </Router>
  );

};

export default App;
