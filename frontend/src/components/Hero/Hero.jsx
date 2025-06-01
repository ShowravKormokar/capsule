import React, { useRef } from 'react';

const Hero = () => {
  const videoRef = useRef(null);

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 3.0; // 2x speed, increase as you like
    }
  };

  return (
    <div className='p-2'>
      <div className="relative w-full h-screen overflow-hidden rounded-[2.5rem] p-6">
        {/* Background Image */}
        <img
          src="https://capsules.moyra.co/_vercel/image?url=%2Fimages%2Fcap3.png&w=2559&q=80"
          // src="https://capsules.moyra.co/_vercel/image?url=%2Fimages%2Fcap1.png&w=2559&q=80"
          alt="hero"
          className="absolute inset-0 w-full h-full object-cover z-0"
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

        {/* Text Content */}
        <div className="relative z-20 flex items-start justify-between h-full p-4">
          <h1
            className="text-white text-4xl md:text-6xl lg:text-9xl font-bold tracking-wider text-center"
            style={{ textShadow: '2px 2px 4px #aaa' }}
          >
            Capsules®
          </h1>

        </div>
        <div className="absolute w-full bottom-25 md:bottom-10">
          <h2 className='flex flex-col text-4xl font-bold tracking-wider text-white' style={{ textShadow: '2px 2px 4px #aaa' }}>
            <span>Closer to</span>
            <span>Nature—Closer</span>
            <span>to Yourself</span>
          </h2>
        </div>
        <div className="absolute w-96 right-2 bottom-25 md:bottom-10">
          <h2 className='flex flex-col text-sm font-bold tracking-wider text-white' style={{ textShadow: '2px 2px 4px #aaa' }}>
            Spend unforgettable and remarkable time
          in the Californian desert with—Capsules.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;
