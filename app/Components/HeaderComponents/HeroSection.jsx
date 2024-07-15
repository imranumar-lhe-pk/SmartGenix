"use client";

import React from "react";
import { Typography, Container, Button, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image"; // For handling images in Next.js

const HeroTextContainer = styled(Box)(({ theme }) => ({
  textAlign: "center",
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
  marginLeft: "20vw",
  flex: 1,
}));

const HeroMainText = styled(Typography)(({ theme }) => ({
  fontSize: "3rem",
  marginBottom: theme.spacing(2),
}));

const HeroSubText = styled(Typography)(({ theme }) => ({
  fontSize: "2rem",
  marginBottom: theme.spacing(2),
}));

const HeroDescriptionText = styled(Typography)(({ theme }) => ({
  fontSize: "1rem",
  maxWidth: 500,
  margin: "0 auto",
  lineHeight: 1.5,
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(3),
  backgroundColor: theme.palette.common.white,
  color: theme.palette.primary.main,
  padding: theme.spacing(1, 2),
  "&:hover": {
    backgroundColor: theme.palette.grey[200],
  },
}));

const HeroSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        marginTop: 3,
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <HeroTextContainer>
        <HeroMainText variant="h1" color="white">
          Simplifying Auto Repairs
        </HeroMainText>
        <HeroSubText color="white" variant="h3">
          With Digital Innovation
        </HeroSubText>
        <HeroDescriptionText color="white" variant="body1">
          Empowering mechanics with cutting-edge tools and giving vehicle owners
          clear insights into their car's health, fostering trust and
          transparency in the auto repair industry.
        </HeroDescriptionText>
        <StyledButton variant="contained" href="/product" endIcon={<ArrowForwardIcon />}>
          See Our Products
        </StyledButton>
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            marginTop: 3,
            justifyContent: "center",
          }}
        >
          <Image src="/mobile.png" alt="Mobile" width={300} height={200} />
        </Box>
      </HeroTextContainer>
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          marginLeft: -35,
        }}
      >
        <Image
          src="/arrow.png"
          alt="Arrow"
          style={{ marginRight: "15vw" }}
          width={350}
          height={300}
        />
      </Box>
    </Box>
  );
};

export default HeroSection;
