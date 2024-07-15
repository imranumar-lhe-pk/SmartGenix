import React from 'react'
import NavBaar from '../Components/HeaderComponents/NavBaar'
import { Box, Container } from '@mui/material'
import HeroSection from '../Components/HeaderComponents/HeroSection'
import CompainBox from '../Components/HeaderComponents/CompainBox'
import CardComponent from '../Components/HeaderComponents/CardComponent'
import Cards from '../Components/HeaderComponents/Cards'
import Information from '../Components/HeaderComponents/Information'
import FAQ from '../Components/HeaderComponents/FAQ'
import Footer from '../Components/HeaderComponents/Footer'

function HeaderComponents() {
  return (
    <Container
    maxWidth={false}
    disableGutters
    sx={{
      padding: 0,
      margin: 0,
    }}
  >
    <Box
      sx={{
        backgroundImage: `url('/bg.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: {sm:"98.9vw", xs:'99.7vw'},
        height: "100%",
        mt: -1,
        ml: -1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <NavBaar />
        <HeroSection />
      </Box>
    </Box>
    <CompainBox />
    <CardComponent />
    <Cards />
    <Information />
    <FAQ />
    <Footer />
  </Container>
  )
}

export default HeaderComponents