import React, { useState } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    const user = {
      email: email,
      password: password
    };

    try {
      const {data} = await axios.post('http://localhost:8000/api/v1/auth/token/', user)

      // Storing Access in cookie
      Cookies.set('access_token', data.access);
      Cookies.set('refresh_token', data.refresh);
      navigate('/');
    }
    catch (error) {
      console.error('Error in token fetch: ', error.message);

    };
  };

  

  return (
    <div className="fixed inset-0 bg-gray-200 bg-opacity-75 flex justify-center items-center">
      <form className="w-full max-w-xs bg-white shadow-md rounded px-8 pt-6 mb-4" onSubmit={submit}>
        <div>
          <h3 className="block text-gray-700 text-lg font-bold mb-2">Sign In</h3>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                   id="email" type="email" placeholder="Enter Email" 
                   name='email' value={email} required 
                   onChange={e => setEmail(e.target.value)}
            />        
        </div>      
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password" type="password" placeholder="Password"
            name="password" value="{password}" required
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Sign In
          </button>
        </div>
      </form>
    </div>

  )

};

export default Login;
