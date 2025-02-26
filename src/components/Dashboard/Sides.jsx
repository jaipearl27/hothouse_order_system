"use client"

import React from 'react'
import SidesCard from '../cards/SidesCard'

const Sides = ({ data }) => {
    // console.log(data)
    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 justify-items-center gap-2 p-2">

                {data.map((item) => (
                    <SidesCard key={`${item._id}sides`} data={item} />
                ))}
            </div>
        </>
    )
}

export default Sides