import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <section className="sticky top-0 z-50 flex justify-between items-center h-20 mx-auto px-4 text-white">
    <div className='flex justify-between items-center h-20 max-w-[1240px] mx-auto px-4 text-white'>
      <h1 className="font-mono text-white text-xl font-bold">Savvi</h1>
      <ul className='hidden md:flex'>
        <li className='p-4 hover:text-gray'><a href="#" className="no-underline text-current hover:text-tertiary"></a></li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-24 w-[100%] h-full border-r border-r-gray-900 bg-background ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}> 
          <li className='p-4 border-b border-gray-600'>Login</li>
          <li className='p-4 border-b border-gray-600'>Sign Up</li>
          <li className='p-4'></li>
      </ul>
    </div>
    </section>
  );
};

export default Navbar;
