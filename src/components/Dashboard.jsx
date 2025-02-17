"use client"

import { useEffect, useState } from "react"
import Card from "./Card"
import axios from "axios"




const Dashboard = () => {

    const [products, setProducts] = useState([])


    useEffect(() => {
        const fetchPizzas = async () => {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL_V1}/pizza`)
            setProducts(response.data.data)

        }
        fetchPizzas()
    }, [])

    return (

        <div className="flex-grow flex">

            <div className="flex flex-col bg-blue-gray-50 h-full w-full py-4">
                <div className="flex px-2 flex-row relative">
                    <div className="absolute left-5 top-3 px-2 py-2 rounded-full bg-red-700 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <input
                        type="text"
                        className="bg-white rounded-3xl shadow-[0_0_5px_5px#f1f1f1] text-lg full w-full h-16 py-4 pl-16 transition-shadow focus:shadow-2xl focus:outline-none"
                        placeholder="Type to Search"
                        x-model="keyword"
                    />
                </div>
                <div className="h-full overflow-hidden mt-4 shadow-[0_0_5px_5px#f1f1f1] rounded-3xl">
                    <div className="h-full overflow-y-auto px-2">

                        <div className="grid grid-cols-4 gap-2 p-2">
                            {products.map((item) => (
                                <Card key={item._id} data={item} />
                            ))}

                        </div>
                        {/* <div
                            className="select-none bg-blue-gray-100 rounded-3xl flex flex-wrap content-center justify-center h-full opacity-25"
                            x-show="products.length === 0"
                        >
                            <div className="w-full text-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                                </svg>
                                <p className="text-xl">
                                    YOU DON'T HAVE
                                    <br />
                                    ANY PRODUCTS TO SHOW
                                </p>
                            </div>
                        </div> */}


                    </div>
                </div>
            </div>



        </div>
    )
}

export default Dashboard