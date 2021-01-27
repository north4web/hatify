import React from 'react'
import HatTypesBucket from "./Hat-types-bucket/Buckets"
import HatTypesBeret from "./Hat-types-beret/berets"
import HatTypesBowler from './Hat-types-bowler/bowlers'

function Body() {
    return (
        <div style={{ margin: "15px" }}>

            <HatTypesBeret />
            <HatTypesBucket />

            <HatTypesBowler />


        </div>
    )

}

export default Body