import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DataExtraction from './pages/DataExtraction';
import Login from './pages/Login';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/webscraping" element={<DataExtraction />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

