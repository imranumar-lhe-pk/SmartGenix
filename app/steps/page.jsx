"use client"

import React, { useState } from 'react';
import Setup from '../Components/Setup-1/Setup';
import Setups from '../Components/Setup-2/Setups';

const Steps = () => {
  const [steps, setSteps] = useState(1);

  return (
    <>
      {steps === 1 ? <Setup setSteps={setSteps} /> : <Setups />}
    </>
  );
}

export default Steps;
