"use client"

import React, { memo, useEffect, useRef, useState, useTransition } from 'react'
import SidesCard from '../cards/SidesCard'
import { fetchSides } from '@/lib/actions/products'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../ui/Loader'

const Sides = () => {
    const dispatch = useDispatch()
    const { sides } = useSelector(state => state.products)

    const loading = useRef(false)
    const [isPending, startTransition] = useTransition()

    useEffect(() => {
        if (loading.current) return
        startTransition(() => {
            loading.current = true
            dispatch(fetchSides()).finally(() => loading.current = false)
        })
    }, [dispatch]);


    return (
        <>


            {isPending ? (

                <Loader />

            ) : (
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 justify-items-center gap-2 p-2">
                    {sides && sides.map((item) => (
                        <SidesCard key={`${item._id}sides`} data={item} />
                    ))}
                </div>
            )}


        </>
    )
}

export default Sides