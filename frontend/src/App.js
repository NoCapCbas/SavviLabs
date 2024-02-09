import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';

// Main app components
import Translate from './components/translate/Translate';
import CodeLaunch from './components/code_launch/CodeLaunch';




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
        <Route path='/code-launch' element={<CodeLaunch />} />
        <Route path='/translate' element={<Translate />} />
      </Routes>
    </Router>
  );

};

export default App;
