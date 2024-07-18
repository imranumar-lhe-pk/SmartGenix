import React from 'react';
import { Button, Box } from '@mui/material';

const NextButton = ({ onClick, disabled }) => {
  return (
    <Box sx={{ marginTop: 2, textAlign: 'center' }}>
      <Button variant="contained" color="primary" onClick={onClick} disabled={disabled}>
        Next
      </Button>
    </Box>
  );
};

export default NextButton;
