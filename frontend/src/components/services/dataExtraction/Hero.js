import React from 'react';
import { Code } from 'lucide-react';
import background from "../../../assets/wave-haikei.svg"


const Hero = ({
  scrollToComponent
}) => {

  const backgroundStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    // color: 'white' // Optional: Change text color for better contrast
  };


  return (
    <section style={backgroundStyle} className='text-white relative'>
      <div className='absolute inset-0 z-[-1] flex justify-center items-center'>
      </div>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center px-[10px]'>
        <p className='text-[#fff] font-bold p-2'>
        </p>
        <h1 className='md:text-7xl sm:text-4xl text-2xl font-bold md:py-6'>
          Custom Web Scraping Services
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-xl text-xl font-bold py-4'>
            
          </p>
        </div>
        <p className='md:text-lg text-md font-bold text-slate-300'>Effortlessly obtain clean, structured data from the web without the complexities of developing or maintaining your own scrapers. Let us handle the hard work, so you can focus on making data-driven decisions.</p>
        <button onClick={scrollToComponent} className='flex flex-row bg-[#715df2] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white justify-center items-center hover:bg-[#8B7AF4]'>
          <span>Request Quote</span>
        </button>
      </div>
    </section>
  );
};

export default Hero;
