import React, { useState } from 'react';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full">
    <div className='flex flex-row justify-between items-center h-24 max-w-[320px] mx-auto px-[5px] text-white'>
    <h1 className='text-lg font-bold text-white flex flew-row justify-center items-center'>
      <img src="CodeLaunchLogo.png" className="h-[40px] w-[40px]" alt="CodeLaunchLogo" />
      <span className="m-2">CodeLaunch</span>
    </h1>
    <ul className='flex flex-row'>
      <li className='p-[10px] cursor-pointer border-b-[1px] border-b-black hover:border-b-[1px] hover:border-b-white'>Pricing</li>
      <li className='p-[10px] cursor-pointer border-b-[1px] border-b-black hover:border-b-[1px] hover:border-b-white'>Demo</li>
    </ul>
    </div>
    </div>
  );
};

export default Navbar;
