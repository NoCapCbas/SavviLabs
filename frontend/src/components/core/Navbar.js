import React, { useState } from 'react';
import { IoIosArrowDropdown } from "react-icons/io";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <section className="sticky top-0 z-50 flex justify-between items-center h-18 mx-auto px-4 text-white">
      <div className='flex justify-between items-center h-full mx-auto px-4 text-white'>
        <h1 className="text-primary font-mono text-3xl font-bold px-2 h-full">Savvi</h1>
        <div classNameName="flex">
          <h2 className="font-mono text-white text-l font-bold">Translate</h2>
        </div>
        <div className="h-full flex px-1">
          <a className="text-2xl" onClick={handleNav}><IoIosArrowDropdown /></a>
        </div>
            
      </div>
    </section>
  );
};

export default Navbar;
