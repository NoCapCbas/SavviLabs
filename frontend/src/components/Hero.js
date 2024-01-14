import React from 'react';
import HackingTextEffect from './HackingTextEffect.js'


const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-primary font-bold p-2'>
          <HackingTextEffect word="savvi.labs" speed={100} settleTime={500}/>
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          Savvi Software Solutions
        </h1>
        <div className='flex justify-center items-center'>
          {/*
          <p className='md:text-4xl sm:text-2xl text-2xl font-bold py-4'>
            Grow with data
          </p>
          */}
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>Savvi Labs is a small team specializing in software service applications</p>
        <button className='flex justify-center items-center bg-primary w-[200px] rounded-full font-bold my-6 mx-auto py-3 text-white hover:bg-tertiary transition duration-300'>
    Sign Up for free
    </button>
      </div>
    </div>
  );
};

export default Hero;
