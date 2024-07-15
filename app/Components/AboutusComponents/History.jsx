import { Box, Container, Typography, Grid, Button, Card, CardContent, Divider } from '@mui/material';
import React from 'react';

function History() {
  const historyData = [
    {
      year: 2021,
      description: "Smartgenix was founded, aiming to revolutionize the automobile service industry.",
    },
    {
      year: 2022,
      description: "Launched the first version of our digital platform for mechanic shops.",
    },
    {
      year: 2023,
      description: "Expanded our services to include vehicle owners for seamless car repair processes.",
    },
  ];

  return (
    <Container sx={{display: {xs:"none", md:'flex'}}}>
      <Box textAlign="center" >
        <Typography fontSize={28} fontWeight="bold" mt={6}>Our History</Typography>
      </Box>
      <Box sx={{ position: 'relative', mt: 10 }}>
        <Divider orientation="vertical" sx={{ position: 'absolute', left: '50%', top: 0, bottom: 0, borderRightWidth: 4 }} />
        {historyData.map((item, index) => (
          <Grid container spacing={6} alignItems="center" key={index} sx={{ position: 'relative' }}>
            <Grid item xs={6} md={5} order={index % 2 === 0 ? 1 : 2}>
              <Card sx={{ mx: 'auto',ml:'20%',  maxWidth: 400 }}>
                <CardContent>
                  <Typography variant="body1" color="text.primary">
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={2} textAlign="center" order={2} sx={{ position: 'relative' }}>
              <Button
                variant="contained"
                sx={{
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  color: 'white',
                  backgroundColor: 'gray',
                  position: 'absolute',
                  left: '50%',
                  transform: 'translateX(-50%)',
                }}
              >
                {item.year}
              </Button>
            </Grid>
            <Grid item xs={6} md={5} order={index % 2 === 0 ? 3 : 1}>
              {/* Empty grid to maintain the structure */}
            </Grid>
          </Grid>
        ))}
      </Box>
    </Container>
  );
}

export default History;
