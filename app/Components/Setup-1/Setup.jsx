"use client"

import React, { useState } from 'react';
import Header from './Header';
import ProgressBar from './ProgressBar';
import SelectionBoxes from './SelectionBox';
import NextButton from './NextButton';
import { Box, Card, Typography } from '@mui/material';

const Setup = ({   setSteps }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState(0);
  const [selectedIndexes, setSelectedIndexes] = useState([]);

  const items = [
    { img: '/opt.png' },
    { img: '/opt1.png' },
    { img: '/opt2.png' },
    { img: '/opt3.png' },
  ];

  const handleNextClick = () => {
    setCompletedSteps(1);
    setActiveStep(1);
    setSteps(2)
  };

  return (
    <Box>
      <Header />
      <Typography variant="h4" sx={{ marginTop: 2, marginLeft: 40 }}>
        Store Setup
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh' }}>
        <Card sx={{ padding: 3, border: '1px solid #e0e0e0', width: '50%', textAlign: 'center' }}>
          <Typography variant="h6" sx={{ marginTop: 2, fontSize: '12px', fontWeight: 'bold' }}>
            Select the vehicles you would permit to be serviced
          </Typography>
          <ProgressBar activeStep={activeStep} completedSteps={completedSteps} />
          <SelectionBoxes items={items} selectedIndexes={selectedIndexes} setSelectedIndexes={setSelectedIndexes} />
          <NextButton onClick={handleNextClick} disabled={selectedIndexes.length === 0} />
        </Card>
      </Box>
    </Box>
  );
};

export default Setup;
