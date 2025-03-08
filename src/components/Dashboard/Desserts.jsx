import React, { useEffect, useRef, useTransition } from 'react'
import { fetchDesserts } from '@/lib/actions/products'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../ui/Loader'
import DessertCard from '../cards/DessertCard'

const Desserts = () => {
    const dispatch = useDispatch()
    const { desserts } = useSelector(state => state.products)


    const loading = useRef(false)
    const [isPending, startTransition] = useTransition()

    useEffect(() => {
        if (loading.current) return
        startTransition(() => {
            loading.current = true
            dispatch(fetchDesserts()).finally(() => loading.current = false)
        })
    }, [dispatch]);

    return (
        <>
            {isPending ? (

                <Loader />

            ) : (
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 justify-items-center gap-2 p-2">
                    {desserts && desserts.map((item) => (
                        <DessertCard key={`${item._id}sides`} data={item} />
                    ))}
                </div>
            )}
        </>
    )
}

export default Desserts