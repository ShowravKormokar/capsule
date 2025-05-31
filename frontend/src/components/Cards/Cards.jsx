import React from 'react'
import Card from './Card'

const Cards = () => {
    return (
        <div className='section'>
            <div className="cards">
                <Card />
                <Card className="card-2" />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default Cards