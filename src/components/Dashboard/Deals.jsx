"use client"

import React, { useEffect, useState } from 'react'
import DealsCards from '../cards/DealsCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDeals } from '@/lib/actions/products';

// async function getData(boolean) {
//     try {
//         const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL_V1}/deals?collectionOnly=${boolean}`);
//         const data = await res.json();
//         return data.data; // Assuming `data` has a `data` property containing the actual deals
//     } catch (err) {
//         console.log("Error Occurred", err);
//         return null;
//     }
// }


const Deals = () => {
    const dispatch = useDispatch()
    const { deals, collectionDeals } = useSelector(state => state.products)
    useEffect(() => {
        dispatch(fetchDeals(false))
        dispatch(fetchDeals(true))
    }, [])

//    console.log(deals, collectionDeals)

    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 justify-items-center gap-2 p-2">
                {Array.isArray(deals) &&
                    deals.map((el, index) => <DealsCards data={el} key={`${el?._id}deal`} />)}
            </div>
        </>
    )
}

export default Deals