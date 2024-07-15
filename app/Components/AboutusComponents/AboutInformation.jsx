import { Box, Container, Typography } from '@mui/material';
import React from 'react';

function AboutInformation() {
  return (
    <Container>
      <Box mt={10} color={'black'} textAlign={'center'}>
        <Typography fontSize={32} fontWeight={'bold'}>About us</Typography>
      </Box>
      <Box mt={10} color={'black'} textAlign={'center'}>
        <Typography fontSize={28} fontWeight={'bold'}>Our Vision</Typography>
        <Box 
          sx={{
            width: { xs: '100%', sm: '75%', md: '60%', lg: '50%', xl: '40%' },
            margin: '0 auto',
          }}
        >
          <Typography fontSize={12} color={'#646464'} fontWeight={'bold'}>
            Smartgenix aspires to revolutionise the automobile service industry by offering a digital platform that simplifies and streamlines the auto-repair process for mechanic shops and vehicle owners.
          </Typography>
        </Box>
      </Box>
      <Box mt={10} color={'black'} textAlign={'center'}>
        <Typography fontSize={28} fontWeight={'bold'}>Our Mission</Typography>
        <Box 
          sx={{
            width: { xs: '100%', sm: '75%', md: '60%', lg: '50%', xl: '40%' },
            margin: '0 auto',
          }}
        >
          <Typography fontSize={12} color={'#646464'} fontWeight={'bold'}>
            Smartgenix aspires to revolutionise the automobile service industry by offering a digital platform that simplifies and streamlines the auto-repair process for mechanic shops and vehicle owners.
          </Typography>
        </Box>
      </Box>
          <Typography fontSize={28} fontWeight={'bold'} textAlign={'center'} mt={6}>Our Team</Typography>
    </Container>
  );
}

export default AboutInformation;
