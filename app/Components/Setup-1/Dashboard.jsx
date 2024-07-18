"use client"

import React, { useState } from 'react';
import Header from './Header';
import ProgressBar from './ProgressBar';
import SelectionBoxes from './SelectionBoxes';
import NextButton from './NextButton';
import { Box, Typography } from '@mui/material';

const Dashboard = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [selectedIndexes, setSelectedIndexes] = useState([]);
  
    const items = [
        { img: '/opt.png',  },
        { img: '/opt1.png', },
        { img: '/opt2.png', },
        { img: 'opt3.png',  },
        // { img: '/path/to/image5.jpg', title: 'Item 5', details: 'Details of Item 5' },
        // { img: '/path/to/image6.jpg', title: 'Item 6', details: 'Details of Item 6' },
      ];
  
    const handleNextClick = () => {
      setActiveStep((prevStep) => (prevStep === 0 ? 1 : prevStep));
    };
  
    return (
      <Box>
        <Header />
        <Typography variant="h4" sx={{ marginTop: 2, textAlign: 'center' }}>
          Dashboard
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
          <Card sx={{ padding: 3, width: '80%', textAlign: 'center' }}>
            <ProgressBar activeStep={activeStep} />
            <SelectionBoxes items={items} selectedIndexes={selectedIndexes} setSelectedIndexes={setSelectedIndexes} />
            <NextButton onClick={handleNextClick} disabled={selectedIndexes.length === 0} />
          </Card>
        </Box>
      </Box>
    );
  };
export default Dashboard;
