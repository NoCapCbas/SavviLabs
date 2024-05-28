import React from 'react';

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-12 px-[80px] grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <h1 className='flex flex-row w-full text-3xl font-bold text-white'>
          <span className="m-2 text-[#af33f2]">SavviLabs</span>
        </h1>
        <p className='py-4'></p>
      </div>
      <div className='lg:col-span-2 flex flex-row-reverse justify-between mt-6'>
{/*
    <div>
        <h6 className='font-medium text-gray-400'>Solutions</h6>
        <ul>
            <li className='py-2 text-sm'>Analytics</li>
            <li className='py-2 text-sm'>Marketing</li>
            <li className='py-2 text-sm'>Commerce</li>
            <li className='py-2 text-sm'>Insights</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Support</h6>
        <ul>
            <li className='py-2 text-sm'>Pricing</li>
            <li className='py-2 text-sm'>Documentation</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Company</h6>
        <ul>
            <li className='py-2 text-sm'>Blog</li>
        </ul>
    </div>
*/}
    <div>
        <h6 className='font-medium text-gray-400'>Legal</h6>
        <ul>
            <li className='py-2 text-sm'>Claim</li>
            <li className='py-2 text-sm'>Policy</li>
            <li className='py-2 text-sm'>Terms</li>
        </ul>
    </div>
      </div>
    </div>
  );
};

export default Footer;
