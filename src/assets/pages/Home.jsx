import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/Sections/HeroSection'
import PopularCard from '../components/Sections/PopularCard'
import OnlineClasses from '../components/Sections/OnlineClasses'
import OfflineClasses from '../components/Sections/OfflineClasses'
import Information from '../components/Sections/Information'
import Footer from '../components/Footer'

function LoadingPage() {
  return (
    <>
    <Navbar />
    <main className=''>
      <HeroSection />
      <PopularCard />
      <OnlineClasses />
      <Information />
      <OfflineClasses />

    </main>
    <Footer />
    </>
    
  )
}

export default LoadingPage