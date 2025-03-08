import React, { useEffect, useRef, useTransition } from 'react'
import PizzaCard from '../cards/PizzaCard'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPizzas } from '@/lib/actions/products'
import Loader from '../ui/Loader'

const Pizza = () => {
    const dispatch = useDispatch()
    const { pizzas } = useSelector(state => state.products)
    const loading = useRef(false)
    const [isPending, startTransition] = useTransition()

    useEffect(() => {
        if (loading.current) return
        startTransition(() => {
            loading.current = true
            dispatch(fetchPizzas()).finally(() => loading.current = false)
        }) 
    }, [dispatch]);


    return (
        <>
            {isPending ? (
                <Loader />
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 justify-items-center gap-2 p-2">
                {pizzas && pizzas.map((item, idx) => (
                    <PizzaCard key={`${item._id}pizza`} data={item} idx={idx} />
                    ))}
                </div>
            )}
        </>
    )
}

export default Pizza