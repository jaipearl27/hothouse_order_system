import React, { useEffect, useRef, useTransition } from 'react'
import { fetchDips } from '@/lib/actions/products'
import { useDispatch, useSelector } from 'react-redux'
import DipCard from '../cards/DipCard'
import Loader from '../ui/Loader'

const Drinks = () => {
    const dispatch = useDispatch()
    const { dips } = useSelector(state => state.products)


    const loading = useRef(false)
    const [isPending, startTransition] = useTransition()

    useEffect(() => {
        if (loading.current) return
        startTransition(() => {
            loading.current = true
            dispatch(fetchDips()).finally(() => loading.current = false)
        })
    }, [dispatch]);

    return (
        <>
            {isPending ? (

                <Loader />

            ) : (
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 justify-items-center gap-2 p-2">
                    {dips && dips.map((item) => (
                        <DipCard key={`${item._id}sides`} data={item} />
                    ))}
                </div>
            )}
        </>
    )
}

export default Drinks