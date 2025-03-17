// import Image from 'next/image'
// import Link from 'next/link';
import React, { useState } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/Select';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/lib/features/cart/cartSlice';

import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog"
import { Button, Input } from "@mui/material"
import { Label } from "@mui/icons-material"


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
        <>
            <Dialog>
                <div
                    className="flex relative flex-col justify-between bg-white shadow-[0_0_2px#000] rounded-md max-w-[17rem]  2xl:max-w-xs w-full mb-10 hover:shadow-[0_0_4px#000000] "
                    key={data?._id}
                >

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
                            {/* <Link
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
                        > */}
                            <DialogTrigger asChild>
                                <BorderColorIcon fontSize='large' className="text-2xl text-slate-800 hover:text-red-800" />
                            </DialogTrigger>
                            {/* </Link> */}
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

                {/* modal content below */}
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Pizza Customization</DialogTitle>
                   
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                Name
                            </Label>
                            <Input id="name" value="Pedro Duarte" className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="username" className="text-right">
                                Username
                            </Label>
                            <Input id="username" value="@peduarte" className="col-span-3" />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit">Save changes</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default PizzaCard