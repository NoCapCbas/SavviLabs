import React from 'react';
// import SavviLabsLogo from '../assets/savviLabs.svg';
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='absolute w-full bottom-0 mx-auto text-gray-800 px-2 py-1'>
        {/* Legal */}
      <div className="flex flex-row w-full justify-center items-center">
        <ul className="flex justify-center items-center text-xs text-white w-4/5">
          <li className="px-2 text-gray-400">© <a href="/" className="text-remove text-center text-white">Savvi Labs.</a> All rights reserved.</li>
          <li>•</li>
          <li className="px-2"><a href="#" className="text-remove text-center text-white">Terms of service</a></li>
          <li>•</li>
          <li className="px-2"><a href="#" className="text-remove text-center text-white">Privacy Policy</a></li>

        </ul>
      </div>     
    </footer>
  );
};

export default Footer;
