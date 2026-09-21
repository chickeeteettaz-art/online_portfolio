import React from 'react'
import Hero from './sections/Hero'
import ShowcaseSection from './sections/ShowcaseSection'
import NavBar from './components/NavBar'
import LogoSection from './components/LogoSection'
import FeatureCards from './sections/FeatureCards'
import ExperienceSection from './sections/ExperienceSection'
import Certifications from './sections/Certifications'
import TechStack from './sections/TechStack'
import Contact from './sections/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <LogoSection />
      <ShowcaseSection />


      <ExperienceSection />
      <Certifications />
      <TechStack />
      <FeatureCards />
      <Contact />
      <Footer />
    </>
  )
}

export default App