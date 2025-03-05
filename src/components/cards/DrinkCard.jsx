import React, { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { addToCart } from "@/app/lib/features/cartSlice/cartSlice";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

import Image from "next/image";


export default function DrinksCard({ data }) {
    // console.log(data)
    const [selectedOption, setSelectedOption] = useState(null);
    useEffect(() => {
        setSelectedOption({
            label: `${data?.price[0]?.drinkType} £${data?.price[0]?.price}`,
            name: data?.drink,
            price: data?.price[0]?.price,
            size: data?.price[0].drinkType,
            value: data?.price[0]?._id,
            img: data?.banner,
        });

        console.log({
            label: `${data?.price[0]?.drinkType} £${data?.price[0]?.price}`,
            name: data?.drink,
            price: data?.price[0]?.price,
            size: data?.price[0].drinkType,
            value: data?.price[0]?._id,
            img: data?.banner,
        })


    }, []);

    // const dispatch = useDispatch();

    // function handleAddDrinkToCart(data) {
    //     if (data.id) {
    //         dispatch(
    //             addToCart({
    //                 id: data?.id + selectedOption?.value,
    //                 name: selectedOption?.name,
    //                 img: selectedOption?.img,
    //                 size: `${selectedOption?.size}-${selectedOption.price}`,
    //                 quantity: 1,
    //                 price: Number(selectedOption.price * 1).toFixed(2),
    //                 totalSum: Number(selectedOption.price * 1).toFixed(2),
    //             })
    //         );

    //         console.log({
    //             id: data?.id + selectedOption?.value,
    //             name: selectedOption?.name,
    //             img: selectedOption?.img,
    //             size: `${selectedOption?.size}"-${selectedOption.price}`,
    //             quantity: 1,
    //             price: Number(selectedOption.price * 1).toFixed(2),
    //             totalSum: Number(selectedOption.price * 1).toFixed(2),
    //         });
    //         console.log("selected ", selectedOption);
    //     }
    // }

    return (

        <div className="flex relative flex-col justify-between bg-white shadow-[0_0_2px#000] rounded-md max-w-[17rem]  2xl:max-w-xs w-full mb-10 hover:shadow-[0_0_4px#000000]" key={data?._id}>
            {/* <Image
                src={data.banner}
                alt={data.drink}
                width={300}
                height={300}
                className="rounded-t-md object-cover w-full h-44"
            /> */}

            <h2 className="text-2xl xl:text-3xl text-center font-semibold mb-1">{data.drink}</h2>
            <div className="space-y-4 mt-2">
                {data.price?.length === 1 ? (
                    <div className="w-full p-2 border border-gray-300 rounded-lg bg-gray-200 text-gray-500">
                        {`${data.price[0].drinkType}  £ ${data.price[0].price}`}
                    </div>
                ) : (


                    <Select
                        onValueChange={(value) => {
                            console.log(value);
                            // setSelectedData(Event.target.value);
                        }}
                        name="drinks"
                        id="drinks"
                        defaultValue={
                            {
                                label: `${data?.price[0]?.drinkType} £${data?.price[0]?.price}`,
                                name: data?.drink,
                                price: data?.price[0]?.price,
                                size: data?.price[0].drinkType,
                                value: data?.price[0]?._id,
                                img: data?.banner,
                            }
                        }
                    >
                        <SelectTrigger className="w-full">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            {data.price.map((drinkItem, idx) => {
                                return (
                                    <SelectItem
                                        key={`drinkItem${idx}`}
                                        value={{
                                            label: `${drinkItem.drinkType} £${drinkItem.price}`,
                                            name: data.drink,
                                            price: drinkItem?.price,
                                            size: drinkItem.drinkType,
                                            value: drinkItem?._id,
                                            img: data?.banner,
                                        }}
                                        data-label={`${drinkItem.drinkType} £${drinkItem.price}`}>
                                        {`${drinkItem.drinkType} £${drinkItem.price}`}
                                    </SelectItem>
                                )
                            })}

                        </SelectContent>
                    </Select>

                )}

                <div
                    className="bg-green-600 hover:bg-green-700 cursor-pointer"
                // onClick={() =>
                //     handleAddDrinkToCart({
                //         id: data._id,
                //     })
                // }
                >
                    <p className="text-center p-2 text-white">Add</p>
                </div>
            </div>
        </div>

    );
}
