"use client"

import React from 'react'
import PizzaCard from '../cards/PizzaCard'

const Pizza = ({ data }) => {
    // console.log(data)
    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 justify-items-center gap-2 p-2">
                {data.map((item, idx) => (
                    <PizzaCard key={`${item._id}pizza`} data={item} idx={idx} />
                ))}
            </div>
        </>
    )
}

export default Pizza