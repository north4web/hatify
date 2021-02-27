import React from 'react'
import Slider from './Slider'
import HatTypesBucket from "./Hat-types-bucket/bucketsList"
import HatTypesBeret from "./Hat-types-beret/BeretsList"
import HatTypesBowler from './Hat-types-bowler/BowlersList'

function Home() {
    return (
        <div>
            <Slider />
            <HatTypesBeret />
            <HatTypesBowler />
            <HatTypesBucket />
        </div>
    )
}

export default Home