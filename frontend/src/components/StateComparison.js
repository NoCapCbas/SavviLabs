import React, { useState, useEffect } from 'react';
import Heading from './Heading';
import SkeletonCards from './SkeletonCards';
const StateComparison = () => {
  return (
    <div>
      <Heading />
      <SkeletonCards /> 
    </div>
  );
};

export default StateComparison;
