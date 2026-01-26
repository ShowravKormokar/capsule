import React from 'react'

const MapLink = () => {
    return (
        <section className="w-screen h-dvh bg-[#181717] flex justify-center items-center text-center">
            <div className=''>
                <p className="text-[0.7rem] font-bold text-[#a79c8d] choose-subtitle">
                    Closer than you think
                </p>
                <h1 className='text-[5vw] leading-15 tracking-tight mt-5 text-[#f4efe7]'>
                    Our Capsules® are located<br />
                    near Los Angeles with easy<br />
                    <a href="#" className='text-[#b1a696] underline'> access by road.</a>
                </h1>
            </div>
        </section>
    )
}

export default MapLink