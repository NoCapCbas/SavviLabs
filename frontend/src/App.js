import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';

// Main app components
import DataExtraction from './components/services/dataExtraction/DataExtraction';




axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "http://127.0.0.1:8000"
});

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/services/data-extraction' element={<DataExtraction />} />
      </Routes>
    </Router>
  );

};

export default App;
