import React from 'react';

const LetsTalk = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            Contact Us
          </h1>
          <p>Complete web data extraction service for B2B, B2C, SAAS platforms. Tell us the data you need, and we'll take care of the rest.</p>
        </div>
        <div className='my-4'>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input
              className='p-3 flex w-full rounded-md text-black'
              type='email'
              placeholder='Enter Email'
            />
            <button className='bg-primary text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'>
              Let's talk
            </button>
          </div>
          <p>
            We care about the protection of your data. Read our{' '}
            <span className='text-primary'>Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LetsTalk;
