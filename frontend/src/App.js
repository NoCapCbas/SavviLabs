import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/core/Navbar';
import Footer from './components/core/Footer';
import Hero from './components/core/Hero';
import Newsletter from './components/core/Newsletter';
// import Blog from './components/Blog';
// import Login from './components/users/Login';




axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "http://127.0.0.1:8000"
});

function App() {

  // const [message, setMessage] = useState('');
  //
  // useEffect(() => {
  //   client.get("/api/hello")
  //   .then(function(res) {
  //     setMessage(res.data.message);
  //   })
  //   .catch(function(error) {
  //     setMessage('Error');
  //   });
  // }, []);

  return (
    <div>
      <Navbar /> 
      <Hero />
      {/* <Blog />*/}
      <Newsletter />
      <Footer />
    </div>
  );

};

export default App;
