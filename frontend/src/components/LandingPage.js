import React from 'react';
import HackingTextEffect from './HackingTextEffect.js'
import EmailIcon from '../assets/email.svg'


const LandingPage = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-primary font-bold p-2'>
          <HackingTextEffect word="PREMIUM WEB SCRAPING" speed={100} settleTime={500}/>
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
            Leverage public data to gain the competitive edge you need
        </h1>
        <div className='flex justify-center items-center'>
          {/*
          <p className='md:text-4xl sm:text-2xl text-2xl font-bold py-4'>
            Grow with data
          </p>
          */}
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>Savvi Labs is a small team specializing in custom web scraping services. We scrape</p>
        <button className='flex items-center bg-primary w-[200px] rounded-full font-bold my-6 mx-auto py-3 text-white hover:bg-tertiary transition duration-300'>
    <img src={EmailIcon} className="mr-2 h-6 w-6"/>
    Get in touch
    </button>
      </div>
    </div>
  );
};

export default LandingPage;
