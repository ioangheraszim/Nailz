import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PopularCard from '../components/Sections/Home/PopularCard'

function ProductsPage() {
  return (
    <>
      <Navbar/>
      <main>
        <h1>
          Filter
        </h1>

        <PopularCard />
        <PopularCard />
      </main>
      <Footer/>
    </>
  )
}

export default ProductsPage