import React from 'react';
import HackingTextEffect from '../utils/HackingTextEffect.js'


const Hero = () => {
  return (
    <section className='text-white h-screen'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-primary font-bold p-2'>
          <HackingTextEffect word="Premium Web Scraping" speed={100} settleTime={500}/>
        </p>
        <h1 className='font-mono md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          Simplifying the Complex
        </h1>
        <div className='flex justify-center items-center'>
          {/*
          <p className='md:text-4xl sm:text-2xl text-2xl font-bold py-4'>
            Grow with data
          </p>
          */}
        </div>
        <p className='font-mono md:text-2xl text-xl font-bold text-gray-500'>Your go-to software toolbox</p>
        <button className='font-mono flex justify-center items-center bg-primary w-[200px] rounded-full font-bold my-6 mx-auto py-3 text-white hover:bg-tertiary transition duration-300'>
    Sign Up for free
    </button>
      </div>
    </section>
  );
};

export default Hero;
