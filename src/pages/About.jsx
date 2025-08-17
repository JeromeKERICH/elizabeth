import React, { useEffect } from 'react'
import AboutSection from '../components/about/About'
import MissionSection from '../components/about/Mission';
import AsSeenOn from '../components/about/Partners';
import FunSide from '../components/about/Fact';

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
  return (
    <div>
      <AboutSection/>
      <MissionSection/>
      <AsSeenOn/>
      <FunSide/>
    </div>
  )
}

export default About
