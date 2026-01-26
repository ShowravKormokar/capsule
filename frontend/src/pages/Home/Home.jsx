import React from 'react'
import Hero from '../../components/Hero/Hero'
import Welcome from '../../components/Welcome/Welcome'
import Choose from '../../components/Choose/Choose'
import StickyCols from '../../components/StickyCols/StickyCols'
import Gallery from '../../components/Gallery/Gallery'
import MarqueeText from '../../components/Marquee/MarqueeText'
import MarqueeSticky from '../../components/Layouts/MarqueeSticky'

const Home = () => {
    return (
        <div>
            <Hero />
            <Welcome />
            <Choose />
            <Gallery />
            <MarqueeSticky />
            <StickyCols />
        </div >
    )
}

export default Home