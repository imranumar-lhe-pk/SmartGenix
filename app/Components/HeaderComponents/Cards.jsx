import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";

function CardImages({ mainImage, heading, description }) {
  return (
    <Card
      sx={{
        maxWidth: { xs: "100%", sm: 300, md: 350, lg: 400 },
        maxHeight: { md: 370 },
        border: "1px solid gray",
        p: { xs: 1, sm: 2, md: 3 },
        m: { xs: 1, sm: 2 },
        mt: { xs: "15vw", md: 10 }, // 
      }}
    >
      <Box
        component="img"
        src={mainImage}
        alt="Card Image"
        sx={{ width: "100%", height: "auto" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" fontSize={14} fontWeight="bold">
          {heading}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}

function Cards() {
  return (
    <Grid container spacing={1} justifyContent="center">
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <CardImages
          mainImage="/Frame1.png"
          heading="Seamless Car Repair Process"
          description="Customers can describe problems, upload photos/videos, get quotes, and approve jobs online."
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <CardImages
          mainImage="/Group19.png"
          heading="Seamless Car Repair Process"
          description="Customers can describe problems, upload photos/videos, get quotes, and approve jobs online."
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <CardImages
          mainImage="/Frame1.png"
          heading="Seamless Car Repair Process"
          description="Customers can describe problems, upload photos/videos, get quotes, and approve jobs online."
        />
      </Grid>
    </Grid>
  );
}

export default Cards;
