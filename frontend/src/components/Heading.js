import React, { useState, useEffect } from 'react';

const Heading = () => {
  return (
    <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center text-white">
      <h1 className="md:text5xl sm:text-4xl text-xl font-bold py-4">
        State Comparison
      </h1>
      <p className="md:text-2xl text-xl text-gray-500">
        Select up to three markets to compare them across vairous metrics
      </p>
    </div>
  );
};

export default Heading;
