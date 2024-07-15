import AboutHeader from '@/app/Components/AboutusComponents/AboutHeader'
import React from 'react'
import AboutInformation from '../Components/AboutusComponents/AboutInformation'
import { Container } from '@mui/material'
import Team from '../Components/AboutusComponents/Team'
import History from '../Components/AboutusComponents/History'
import Footer from '../Components/HeaderComponents/Footer'

function AboutComponents() {
  return (
    <Container>
    <AboutHeader />
    <AboutInformation />
    <Team />
    <History />
    <Footer />
    </Container>
  )
}

export default AboutComponents