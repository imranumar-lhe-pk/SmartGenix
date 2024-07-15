import AboutHeader from '@/app/Components/AboutusComponents/AboutHeader'
import React from 'react'
import { Container } from '@mui/material'
import Team from '../Components/Products/Team'
import Footer from '../Components/HeaderComponents/Footer'
import Products from '../Components/Products/Products'

function AboutComponents() {
  return (
    <Container>
    <AboutHeader />
    <Products />
    <Team />
   
    <Footer />
    </Container>
  )
}

export default AboutComponents