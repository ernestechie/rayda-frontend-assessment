import React from 'react';
import { Box } from '@mui/material';
import spinnerSvg from '../assets/spinner.svg';

const Spinner = () => {
  return (
    <Box sx={{ p: 4, mx: 'auto' }}>
      <img src={spinnerSvg} alt='Loading spinner' className='spinner' />
    </Box>
  );
};

export default Spinner;
