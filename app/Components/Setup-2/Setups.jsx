"use client"

import React, { useState, useEffect } from 'react';
import Header from './Header';
import ProgressBar from './ProgressBar';
import SelectionBoxes from './SelectionBox';
import NextButton from './NextButton';
import { Box, Card, Typography } from '@mui/material';

const Setups = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState(2); // Both steps completed
  const [selectedIndexes, setSelectedIndexes] = useState([]);

  useEffect(() => {
    setActiveStep(1);
    setCompletedSteps(2);
  }, []);

  const items = [
    { img: '/opt4.png' },
    { img: '/opt5.png' },
    { img: '/opt6.png' },
  ];

  return (
    <Box>
      <Header />
      <Typography variant="h4" sx={{ marginTop: 2, textAlign: 'center' }}>
        Dashboard
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
        <Card sx={{ padding: 3, width: '80%', textAlign: 'center' }}>
          <ProgressBar activeStep={activeStep} completedSteps={completedSteps} />
          <SelectionBoxes items={items} selectedIndexes={selectedIndexes} setSelectedIndexes={setSelectedIndexes} />
          <NextButton onClick={() => {}} disabled={selectedIndexes.length === 0} />
        </Card>
      </Box>
    </Box>
  );
};

export default Setups;
