"use client"

import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/lib/features/cart/cartSlice';



const PizzaCard = ({ data }) => {


    const dispatch = useDispatch()

    const selectedSizeId = Array.isArray(data?.priceSection) && data?.priceSection[0]?.size?._id;

    const [selectedData, setSelectedData] = useState(selectedSizeId);

    const [uniquePizzaId, setUniquePizzaId] = useState(
        selectedSizeId + data?._id
    );

    const selectedLabelName =
        Array.isArray(data?.priceSection) &&
        `${data?.priceSection[0]?.size?.name}-${data?.priceSection[0]?.price}`;

    const [selectedLabel, setSelectedLabel] = useState(selectedLabelName);

    const handleChange = (value) => {
        const selectedItem = data?.priceSection.find((i) => i?.size?._id === value)

        setUniquePizzaId(value + data?._id);
        setSelectedData(value);
        setSelectedLabel(`${selectedItem?.size?.name}-${selectedItem?.price}`)
    };

    // const combineNames = () => {
    //     const items = [
    //         data?.meatToppingsName,
    //         data?.vegetarianToppingsName,
    //         data?.cheeseName,
    //         data?.sauceName,
    //     ]
    //         .filter((item) => item && item.length > 0)
    //         .flat();

    //     // Join the items with ", " but replace regular spaces with non-breaking spaces
    //     return items.map((item) => item.replace(/ /g, "\u00A0")).join(", ");
    // };


    return (
        <div
            className="flex relative flex-col justify-between bg-white shadow-[0_0_2px#000] rounded-md max-w-[17rem]  2xl:max-w-xs w-full mb-10 hover:shadow-[0_0_4px#000000] "
            key={data?._id}
        >
            <div className="">
                {/* <Image
                    src={data?.banner}
                    alt={data?.pizzaName}
                    width={500}
                    height={500}
                    className="h-20 w-full rounded-t-md object-cover"
                /> */}
            </div>
            <div className="flex absolute justify-end w-full p-1">
                {" "}
                <div
                    className={` rounded-md  w-6 h-6 border-2 flex justify-center items-center bg-white ${data?.filter?.filter === ("Vegetarian" || "VEGETARIAN")
                        ? "border-green-600" : "border-red-800"
                        }`}
                >
                    <span
                        size={20}
                        className={`${data?.filter?.filter === ("Vegetarian" || "VEGETARIAN")
                            ? "bg-green-600 "
                            : "bg-red-800"
                            } h-2 w-2 rounded-full`}
                    ></span>
                </div>
            </div>
            <div className=" h-full px-2">
                <div className="mt-6">
                    <h3 className="text-2xl xl:text-3xl text-center font-semibold mb-1 ">
                        {data?.pizzaName}
                        {/* <div className="text-red-800">
                            (20% Off on Collection)
                        </div> */}
                    </h3>
                    {/* <p className="text-sm font-semibold text-gray-500 mb-4 whitespace-wrap overflow-hidden "> */}
                    {/* {combineNames()} */}
                    {/* </p> */}
                </div>
            </div>

            <div className="my-2">
                <div className="">
                    <Select
                        onValueChange={(value) => {
                            handleChange(value)
                        }}
                        name="pizzas"
                        id="pizzas"
                        defaultValue={data?.priceSection[0]?.size?._id}
                    >
                        <SelectTrigger className="w-full">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            {data?.priceSection.map((data, idx) => {
                                return (
                                    <SelectItem
                                        key={idx}
                                        value={data?.size?._id}
                                        data-label={`${data?.size?.name}-${data?.price}`}>
                                        {`${data?.size?.name} £ ${data?.price}`}
                                    </SelectItem>
                                )
                            })}

                        </SelectContent>
                    </Select>


                </div>

                <div className="flex gap-3 items-center mt-2 px-2">
                    <Link
                        // onClick={() => {
                        //   selectedData &&
                        //     dispatch(
                        //       getCustomizationDetails({
                        //         name: data?.pizzaName,
                        //         img: data?.banner,
                        //         priceSection: data?.priceSection,
                        //         id: data?._id,
                        //         sauceName: data?.sauceName,
                        //         cheeseName: data?.cheeseName,
                        //         vegetarianToppingsName: data?.vegetarianToppingsName,
                        //         meatToppingsName: data?.meatToppingsName,
                        //         baseName: data?.baseName,
                        //         selectedData: selectedData,
                        //       })
                        //     );

                        // }}
                        href={`#`}
                    >
                        <BorderColorIcon fontSize='large' className="text-2xl text-slate-800 hover:text-red-800" />
                    </Link>
                    <div className="bg-green-600 hover:bg-green-700 rounded-lg flex items-center justify-center w-full">
                        <button
                            onClick={() => {
                                selectedData &&
                                    dispatch(
                                        addToCart({
                                            name: data?.pizzaName,
                                            img: data?.banner,
                                            size: selectedLabel,
                                            id: uniquePizzaId,
                                            quantity: 1,
                                            price: Number(selectedLabel.split("-")[1]),
                                            totalSum: Number(selectedLabel.split("-")[1]),
                                            discount: (Number(selectedLabel.split("-")[1]) * 0.2).toFixed(2),
                                        })
                                    );
                            }}
                            className="text-center rounded-lg w-full p-2 font-bold text-2xl text-white"
                            type="button"
                        >
                            Add
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PizzaCard