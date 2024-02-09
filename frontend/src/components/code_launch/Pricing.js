import React from 'react';
import { Rocket } from 'lucide-react';

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 border-2 border-black'>
              <h2 className='text-2xl font-bold text-center py-8'>Starter</h2>
              <p className='text-center text-4xl font-bold'>$0</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                  <p className='py-2 border-b mx-8'>1 Granted User</p>
                  <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
              </div>

              <button className='flex flex-row bg-[#af33f2] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black justify-center items-center'>
                <Rocket size={20} color="rgba(0, 0, 0, 1)" className="mx-2 fill-black" />
                <span>Get CodeLaunch</span>
              </button>
          </div>
          <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300 border-2 border-[#af33f2]'>
              <h2 className='text-2xl font-bold text-center py-8'>Pro</h2>
              <p className='text-center text-4xl font-bold'>$200</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                  <p className='py-2 border-b mx-8'>1 Granted User</p>
                  <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
              </div>

              <button className='flex flex-row bg-[#af33f2] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black justify-center items-center'>
                <Rocket size={20} color="rgba(0, 0, 0, 1)" className="mx-2 fill-black" />
                <span>Get CodeLaunch</span>
              </button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 border-2 border-black'>
              <h2 className='text-2xl font-bold text-center py-8'>All-in</h2>
              <p className='text-center text-4xl font-bold'>$300</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                  <p className='py-2 border-b mx-8'>1 Granted User</p>
                  <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
              </div>
              <button className='flex flex-row bg-[#af33f2] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black justify-center items-center'>
                <Rocket size={20} color="rgba(0, 0, 0, 1)" className="mx-2 fill-black" />
                <span>Get CodeLaunch</span>
              </button>
          </div>
      </div>
    </div>
  );
};

export default Cards;
