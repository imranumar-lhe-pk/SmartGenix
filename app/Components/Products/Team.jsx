import { Box, Card, CardContent, Grid, Typography, Button } from "@mui/material";
import React from "react";

function CardImages({ mainImage, topLeftImage, heading, description }) {
  return (
    <Card
      sx={{
        maxWidth: { xs: "100%", sm: 300, md: 350, lg: 400 },
        maxHeight: { md: 370 },
        border: "1px solid gray",
        p: { xs: 1, sm: 2, md: 3 },
        m: { xs: 1, sm: 2 },
        mt: { xs: "15vw", md: 10 },
        position: "relative",
      }}
    >
      <Box
        component="img"
        src={mainImage}
        alt="Card Image"
        sx={{ width: "100%", height: "auto" }}
      />
      <Box
        component="img"
        src={topLeftImage}
        alt="Top Left Image"
        sx={{
          position: "absolute",
          top: 70, // Adjust the positioning as needed
          left: 60,
          width: 130, // Adjust the size as needed
          height: 100, // Adjust the size as needed
          borderRadius: "50%",
        }}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" fontSize={14} fontWeight="bold">
          {heading}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          
        >
          See More
        </Button>
      </CardContent>
    </Card>
  );
}

function Team() {
  return (
    <Grid container spacing={1} justifyContent="center">
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <CardImages
          mainImage="/box.png"
          topLeftImage="/product.png"
          heading="Independent Mechanic"
          
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <CardImages
          mainImage="/box.png"
          topLeftImage="/productimg.png"
          heading="Recovery Company"
          
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <CardImages
          mainImage="/box.png"
          topLeftImage="/productimgs.png"
          heading="Enterprise"
        />
      </Grid>
    </Grid>
  );
}

export default Team;
