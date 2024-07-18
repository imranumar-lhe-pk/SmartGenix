import React from 'react';
import { Stepper, Step, StepLabel, Box } from '@mui/material';

const ProgressBar = ({ activeStep, completedSteps }) => {
  return (
    <Box sx={{ width: '100%', marginTop: 2 }}>
      <Stepper activeStep={activeStep}>
        <Step completed={completedSteps >= 1}>
          <StepLabel>Step 1</StepLabel>
        </Step>
        <Step completed={completedSteps >= 2}>
          <StepLabel>Step 2</StepLabel>
        </Step>
      </Stepper>
    </Box>
  );
};

export default ProgressBar;
