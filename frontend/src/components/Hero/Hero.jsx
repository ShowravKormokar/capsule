import React, { useRef, useEffect } from 'react';

const Hero = () => {
  const videoRef = useRef(null);

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 3.0;
    }
  };

  return (
    <div className="md:m-2">
      <div className="relative w-full h-auto md:h-fit lg:h-screen overflow-hidden md:rounded-[2.5rem] p-4 flex flex-col justify-center">
        {/* Background Desktop Image (hidden on small devices) */}
        <img
          src="https://capsules.moyra.co/_vercel/image?url=%2Fimages%2Fcap3.png&w=2559&q=80"
          alt="hero"
          className="hidden lg:block absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Overlay Video */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-10 opacity-[25%]"
          src="https://capsules.moyra.co/video/smoke_final.mp4"
          onLoadedMetadata={handleLoadedMetadata}
        ></video>

        {/* Main Content */}
        <div className="relative z-20 flex flex-col items-center justify-start text-center space-y-6">
          <h1
            className="text-white text-start text-6xl mt-10 md:text-9xl font-bold tracking-wider lg:absolute lg:bottom-44 lg:left-2"
            style={{ textShadow: '2px 2px 4px #aaa' }}
          >
            Capsules®
          </h1>

          <div className='lg:absolute md:w-full md:flex md:flex-col lg:flex-row lg:justify-between lg:items-end lg:text-start lg:top-50'>
            {/* Slogan */}
            <h2
              className="text-start lg:mt-0 text-white lg:text-2xl lg:font-bold tracking-wider flex flex-col gap-1"
              style={{ textShadow: '2px 2px 4px #000' }}
            >
              <span>Closer to</span>
              <span>Nature—Closer</span>
              <span>to Yourself</span>
            </h2>

            {/* Description */}
            <p
              className="text-white text-sm font-normal text-start mt-12 md:text-md max-w-sm md:font-medium tracking-wide lg:text-end"
              style={{ textShadow: '2px 2px 4px #000' }}
            >
              Spend unforgettable and remarkable time in the Californian desert with—Capsules.
            </p>
          </div>

        </div>
        {/* Bottom Mobile Background Image (only shown on small screens) */}
        <div className="block lg:hidden mt-10 mb-6">
          <img
            src="https://capsules.moyra.co/_vercel/image?url=%2Fimages%2Fhero-mobile.png&w=2559&q=80"
            alt="mobile bg"
            className="w-full rounded-[2rem] object-cover shadow-[0_0_20px_rgba(255,0,0,0.15)]"
          />
        </div>
      </div>


    </div>
  );
};

export default Hero;
