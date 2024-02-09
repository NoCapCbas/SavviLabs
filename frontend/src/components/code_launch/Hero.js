import React from 'react';
import { Rocket } from 'lucide-react';

const Hero = () => {


  return (
    <div className='text-white relative'>
      <div className='absolute inset-0 z-[-1] flex justify-center items-center'>
        <Rocket size={800} color="rgba(255, 0, 255, 0.1)"/> 
      </div>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center px-[10px]'>
        <p className='text-[#af33f2] font-bold p-2'>
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          Launch your App Faster
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            
          </p>
        </div>
        <p className='text-lg font-bold text-white'>Accelerate the rate at which you build applications with a Django/ReactJS code template. Includes all you need to build your web app tools, SaaS, and more.  </p>
        <button className='flex flex-row bg-[#af33f2] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black justify-center items-center'>
          <Rocket size={20} color="rgba(0, 0, 0, 1)" className="mx-2 fill-black" />
          <span>Get CodeLaunch</span>
        </button>
        <span className="text-xs font-bold text-gray-300 border-b-[1px] border-b-black"><span className="text-white border-b-[1px] border-b-white">$100 off</span> for the first 500 (500 left)</span>
      </div>
    </div>
  );
};

export default Hero;
