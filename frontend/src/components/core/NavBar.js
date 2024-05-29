import React, { useState } from 'react';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <navbar className="bg-[#212121] w-full flex flex-row">
      <div className='flex flex-row justify-center items-center h-24 max-w-[400px] mx-auto px-[5px] text-white'>
        <h1 className='text-lg font-bold text-white flex flew-row justify-center items-center'>
          <span className="m-2 text-3xl font-semibold text-gray-50">Savvi Labs</span>
        </h1>
      </div>
        <div className="flex flex-row text-white">
          <ul className="flex flex-row justify-center items-center">
          </ul>
        </div>
    </navbar>
  );
};

export default Navbar;
