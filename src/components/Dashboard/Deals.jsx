import React, { useEffect, useRef, useState, useTransition } from 'react'
import DealsCards from '../cards/DealsCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDeals } from '@/lib/actions/products';
import Loader from '../ui/Loader';

const Deals = () => {
    const dispatch = useDispatch()
    const { deals, collectionDeals } = useSelector(state => state.products)


    const loading = useRef(false)
    const [isPending, startTransition] = useTransition()

    useEffect(() => {
        if (loading.current) return
        startTransition(() => {
            loading.current = true
            Promise.all([
                dispatch(fetchDeals(false)),
                dispatch(fetchDeals(true))
            ]).finally(() => loading.current = false)
        })
    }, [dispatch]);





    //    console.log(deals, collectionDeals)

    return (
        <>
            {isPending ? (

                <Loader />

            ) : (
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 justify-items-center gap-2 p-2">
                    {Array.isArray(deals) &&
                        deals.map((el, index) => <DealsCards data={el} key={`${el?._id}deal`} />)}
                </div>
            )}
        </>
    )
}

export default Deals