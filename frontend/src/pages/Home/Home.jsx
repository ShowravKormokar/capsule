import React from 'react'
import Hero from '../../components/Hero/Hero'
import Welcome from '../../components/Welcome/Welcome'
import Choose from '../../components/Choose/Choose'
import StickyCols from '../../components/StickyCols/StickyCols'

const Home = () => {
  return (
    <div>
      <Hero />
      <Welcome />
      <Choose />
      <StickyCols />
    </div>
  )
}

export default Home