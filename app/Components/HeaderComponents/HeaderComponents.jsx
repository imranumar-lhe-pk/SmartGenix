import React from 'react'
import NavBaar from './NavBaar'
import { Box, Container } from '@mui/material'
import HeroSection from './HeroSection'
import CompainBox from './CompainBox'
import CardComponent from './CardComponent'
import Cards from './Cards'
import Information from './Information'
import FAQ from './FAQ'
import Footer from './Footer'

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