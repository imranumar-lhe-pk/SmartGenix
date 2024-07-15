import { Box, Container, Typography } from '@mui/material';
import React from 'react';

function Products() {
  return (
    <Container>
      <Box mt={10} color={'black'} textAlign={'center'}>
        <Typography fontSize={32} fontWeight={'bold'}>All Products</Typography>
      </Box>
     
    </Container>
  );
}

export default Products;
