import React, { useEffect } from 'react'
import Hero from '../components/home/Hero'
import FrameworkSection from '../components/home/Frameworks'
import ProductsSection from '../components/home/Products'



const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }
    , [])
  return (
    <div>
      <Hero />
      <FrameworkSection/>
      <ProductsSection/>
      
    </div>
  )
}

export default Home
