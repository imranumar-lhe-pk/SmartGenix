import React from "react";
import { Box, Card, CardContent, Grid, Typography, Button } from "@mui/material";
import DoneIcon from '@mui/icons-material/Done';
import { Apartment, CardTravel } from "@mui/icons-material";

function PricingCard({ title, price, features }) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        m: 2,
        p: 2,
        border: "1px solid gray",
        borderRadius: "10px",
      }}
    >
      <CardContent>
        
        <Typography variant="h6" fontSize={12}>
          {title}
        </Typography>
        <Typography variant="h6" fontWeight={'bold'} color="text.secondary" sx={{ mt: 1, mb: 2 }}>
          ${price}/month
        </Typography>
        <Box sx={{ mb: 2 }}>
          {features.map((feature, index) => (
            <Box key={index} display="flex" alignItems="center">
              <DoneIcon sx={{ mr: 1, color: "green" }} />
              <Typography variant="body2" color="text.secondary">
                {feature}
              </Typography>
            </Box>
          ))}
        </Box>
        <Button variant="contained" sx={{gap:1  }} color="primary">
          <CardTravel />
          Subscribe Now
        </Button>
      </CardContent>
    </Card>
  );
}

function Pricing() {
  return (
    <Box>
      <Box textAlign="center" mt={10}>
        <Typography variant="h4" fontWeight="bold">
          Our Packages
        </Typography>
      </Box>
      <Grid container justifyContent="center" sx={{ mt: 4 }}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <PricingCard
            title="Independent mechanic"
            price="29"
            features={["Digital booking system","Digital booking system","Digital booking system","Digital booking system","Digital booking system","Digital booking system","Digital booking system"]}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <PricingCard
            title="Recovery
company"
            price="59"
            features={["Digital booking system","Digital booking system","Digital booking system","Digital booking system","Digital booking system","Digital booking system","Digital booking system"]}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <PricingCard
            title="Enterprise"
            price="99"
            features={["Digital booking system","Digital booking system","Digital booking system","Digital booking system","Digital booking system","Digital booking system","Digital booking system"]}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Pricing;
