import React from 'react'

const Preloader = () => {
    return (
        <>
            <div className='preloader-progress'>
                <div className='preloader-progress-bar'></div>
                <div className='preloader-logo'><h1>Capsule</h1></div>
            </div>

            <div className='preloader-mask'></div>

            <div className='preloader-content'>
                <div className='preloader-footer'>
                    <p>
                        Spaces unfold in light and shadow, where structure finds its quiet rhythm, and time align harmony.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Preloader;