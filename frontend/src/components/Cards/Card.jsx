import React from 'react'

const Card = () => {
    return (
        <div className='card'>
            <div className="card-wrapper">
                <div className="card-content">
                    <div className="card-title">
                        <h1>Curved Horizon</h1>
                    </div>
                    <div className="card-description">
                        <p>A futuristic residence taht plays with curvature and flow, blending bold geometry with natural topography.</p>
                    </div>
                </div>
                <div className="card-img">
                    <img src="https://capsules.moyra.co/_vercel/image?url=%2Fimages%2Fcap2.png&w=2559&q=80" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Card