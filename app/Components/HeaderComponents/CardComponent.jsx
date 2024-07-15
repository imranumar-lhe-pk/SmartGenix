import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

function ImageCard({
  mainImage,
  topLeftImage,
  bottomLeftImage,
  heading,
  description,
}) {
  return (
    <Card
      sx={{
        maxWidth: 430,
        p: 2,
        border: "1px solid gray",
        width: {
          xs: "100%", // Full width on xs screens
          sm: "50%",  // 50% width on sm screens
          md: "33%",  // 33% width on md screens
        },
        boxSizing: "border-box",
      }}
    >
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          height="120"
          sx={{ padding: "3%" }}
          image={mainImage}
          alt="Main Image"
        />
        <Box
          component="img"
          src={topLeftImage}
          alt="Top Left Image"
          sx={{
            position: "absolute",
            top: 8,
            left: 8,
            width: 40,
            height: 40,
            borderRadius: "50%",
          }}
        />
        <Box
          component="img"
          src={bottomLeftImage}
          alt="Bottom Left Image"
          sx={{
            position: "absolute",
            bottom: 8,
            right: 8,
            width: 40,
            height: 40,
            borderRadius: "50%",
          }}
        />
      </Box>
      <CardContent>
        <Typography
          gutterBottom
          variant="h6"
          fontSize={14}
          fontWeight={"bold"}
          component="div"
        >
          {heading}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}

function CardComponent() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: 5,
        flexWrap: "wrap", // Ensure cards wrap on smaller screens
      }}
    >
      <ImageCard
        mainImage="/Group10.png"
        topLeftImage="/Frame 131.png"
        bottomLeftImage="/Frame 216.png"
        heading="All-in-one EPOS System"
        description="Create jobs, accept payments (cash or card), track earnings, and manage finances effortlessly."
      />
      <ImageCard
        mainImage="/Group13.png"
        topLeftImage="/Frame.png"
        bottomLeftImage="/Frame (1).png"
        heading="Effortless Appointment Management"
        description="See all bookings in one place, manage them easily, and boost productivity."
      />
    </Box>
  );
}

export default CardComponent;
