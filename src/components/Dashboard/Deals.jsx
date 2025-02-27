"use client"

import React, { useEffect, useState } from 'react'
import DealsCards from '../cards/DealsCard';

async function getData(boolean) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL_V1}/deals?collectionOnly=${boolean}`);
        const data = await res.json();
        return data.data; // Assuming `data` has a `data` property containing the actual deals
    } catch (err) {
        console.log("Error Occurred", err);
        return null;
    }
}


const Deals = ({ data }) => {

    const [dealData, setDealData] = useState(null);
    const [collectionOnlyDealData, setCollectionOnlyDealData] = useState(null);
    // const todaysDay = moment()?.tz(moment?.tz?.guess())?.format('dddd');

    useEffect(() => {
        async function fetchData() {
            const data = await getData(false);
            const collectionOnly = await getData(true);
            setDealData(data);
            setCollectionOnlyDealData(collectionOnly);

            setDealData(data);
        }
        fetchData();
    }, []);

    useEffect(() => {
        console.log(dealData, collectionOnlyDealData)
    }, [dealData, collectionOnlyDealData])


    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 justify-items-center gap-2 p-2">
                {Array.isArray(dealData) &&
                    dealData.map((el, index) => <DealsCards data={el} key={index} />)}
            </div>
        </>
    )
}

export default Deals