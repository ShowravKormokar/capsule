import React from 'react'
import Hero from '../../components/Hero/Hero'
import Welcome from '../../components/Welcome/Welcome'
import Choose from '../../components/Choose/Choose'
import StickyCols from '../../components/StickyCols/StickyCols'
import Gallery from '../../components/Gallery/Gallery'
import MarqueeText from '../../components/Marquee/MarqueeText'

const Home = () => {
  return (
    <div>
      <Hero />
      <Welcome />
      <Choose />
      <Gallery />
      <section>
        <div className='marquee-overlap pl-8'>
          <p className='text-[.7rem] text-[#eae5dd] choose-subtitle'>Want to learn more about<br /> the benefits of—Capsules<span>®</span>?</p>
        </div>
        <MarqueeText />
        <StickyCols />
      </section>
    </div >
  )
}

export default Home