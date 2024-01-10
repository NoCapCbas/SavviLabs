import React, { useState } from 'react';
import SavviLabsLogo from '../assets/savviLabs.svg'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="sticky top-0 z-50 flex justify-between items-center h-24 mx-auto px-4 text-white bg-background">
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white bg-background'>
      <img src={SavviLabsLogo} alt="Savvi Labs Logo" className="w-1/9 text-3xl font-bold"/>
      <ul className='hidden md:flex'>
        <li className='p-4'>Home</li>
        <li className='p-4'>Services</li>
        <li className='p-4'>Contact</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-background ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
          <div className="flex justify-center items-center mx-auto">
            <img src={SavviLabsLogo} alt="Savvi Labs Logo" className="w-1/9 text-3xl font-bold"/>
          </div>
          <li className='p-4 border-b border-gray-600'>Home</li>
          <li className='p-4 border-b border-gray-600'>Services</li>
          <li className='p-4'>Contact</li>
      </ul>
    </div>
    </div>
  );
};

export default Navbar;
