"use client"

import React from 'react'
import DrinksCard from '../cards/DrinkCard'

const Drinks = ({ data }) => {
    console.log(data)
    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 justify-items-center gap-2 p-2">
                {data.map((item) => (
                    <DrinksCard key={`${item?._id}drink`} data={item} />
                ))}
            </div>
        </>
    )
}

export default Drinks