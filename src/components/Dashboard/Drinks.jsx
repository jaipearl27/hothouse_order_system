"use client"

import React, { useEffect } from 'react'
import DrinksCard from '../cards/DrinkCard'
import { fetchDrinks } from '@/lib/actions/products'
import { useDispatch, useSelector } from 'react-redux'

const Drinks = () => {
    const dispatch = useDispatch()
    const { drinks } = useSelector(state => state.products)

    useEffect(() => {
        dispatch(fetchDrinks())
    }, [])
    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 justify-items-center gap-2 p-2">
                {drinks && drinks.map((item) => (
                    <DrinksCard key={`${item?._id}drink`} data={item} />
                ))}
            </div>
        </>
    )
}

export default Drinks