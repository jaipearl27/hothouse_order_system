"use client"

import React, { useEffect } from 'react'
import SidesCard from '../cards/SidesCard'
import { fetchSides } from '@/lib/actions/products'
import { useDispatch, useSelector } from 'react-redux'

const Sides = () => {
    const dispatch = useDispatch()
    const { sides } = useSelector(state => state.products)

    useEffect(() => {
        dispatch(fetchSides())
    }, [])

    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 justify-items-center gap-2 p-2">

                {sides && sides.map((item) => (
                    <SidesCard key={`${item._id}sides`} data={item} />
                ))}
            </div>
        </>
    )
}

export default Sides