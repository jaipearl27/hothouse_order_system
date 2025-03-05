"use client"

import React, { useEffect } from 'react'
import PizzaCard from '../cards/PizzaCard'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPizzas } from '@/lib/actions/products'

const Pizza = () => {
    const dispatch = useDispatch()
    const { pizzas } = useSelector(state => state.products)

    useEffect(() => {
        dispatch(fetchPizzas())
    }, [])


    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 justify-items-center gap-2 p-2">
                {pizzas && pizzas.map((item, idx) => (
                    <PizzaCard key={`${item._id}pizza`} data={item} idx={idx} />
                ))}
            </div>
        </>
    )
}

export default Pizza