import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import Navbar from './components/Navbar'
import ExpertiseSection from './page/ExpertiseSection'
import PortfolioWorks from './page/PortfolioWorks'
import DesignerPortfolio from './components/DesignerPortfolio'
import ExperienceSection from './page/ExperienceSection'
import BlogSection from './page/BlogSection'
import TestimonialsSection from './page/TestimonialsSection'
import FaqSection from './page/FaqSection'
import PortfolioFooter from './page/PortfolioFooter'

function App() {


  return (
    <>
      <Navbar />
      <DesignerPortfolio />
      <ExpertiseSection />
      <PortfolioWorks />
      <ExperienceSection />
      <BlogSection />
      <TestimonialsSection />
      <FaqSection />
      <PortfolioFooter />
    </>
  )
}

export default App
