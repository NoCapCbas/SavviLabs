import React from 'react';
import SavviLabsLogo from '../assets/savviLabs.svg';
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      {/* Socials */}
      <div className="items-center justify-center">
        <img src={SavviLabsLogo} alt="Savvi Labs Logo" className="w-1/9 text-3xl font-bold"/>
        <div className='flex justify-between md:w-[50%] my-3'>
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
        </div>
      </div>
      {/* Useful Links */}
      <div className='lg:col-span-2 flex justify-end items-center mt-6'>
      {/*
        <div>
            <h6 className='font-medium text-gray-400'>Newsletter</h6>
        </div>
        <div>
            <h6 className='font-medium text-gray-400'>Blog</h6>
        </div>
      */}
      </div>
      {/* Legal */}
      <div className="flex flex-col lg:flex-row gap-8 justify-between items-center lg:col-span-3 w-full">
        <p className="mt-4 text-xs text-white order-2 lg:order-1 lg:w-1/3">© <a>Savvi Labs</a></p>
        {/*
        <ul className="flex flex-col lg:flex-row lg:space-x-6 mb-0 items-center text-xs order-1 lg:order-2 lg:w-2/3">
          <li className="flex-1">
            <a href="/tos" className="flex items-center justify-center lg:justify-start cursor-pointer transition ease-in-out no-underline text-white hover:underline active:text-white py-2 focus:outline-none focus:ring-none rounded">
              Terms of Service
            </a>
          </li>
          <li className="flex-1">
            <a href="/gtc" className="flex items-center justify-center lg:justify-start cursor-pointer transition ease-in-out no-underline text-white hover:underline active:text-white py-2 focus:outline-none focus:ring-none rounded">
              General Terms and Conditions
            </a>
          </li>
          <li className="flex-1">
            <a href="/privacy" className="flex items-center justify-center lg:justify-start cursor-pointer transition ease-in-out no-underline text-white hover:underline active:text-white py-2 focus:outline-none focus:ring-none rounded">
              Privacy Policy
            </a>
          </li>
          <li className="flex-1">
            <a href="/cookies" className="flex items-center justify-center lg:justify-start cursor-pointer transition ease-in-out no-underline text-white hover:underline active:text-white py-2 focus:outline-none focus:ring-none rounded">
              Cookie Policy
            </a>
          </li>
        </ul>
        */}
      </div>     
    </div>
  );
};

export default Footer;
