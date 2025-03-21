import Link from "next/link";
import React, { useEffect, useState } from "react";
// import Select from "react-select";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/Select';


import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog"
import { Button, Input } from "@mui/material"
import { Label } from "@mui/icons-material"
import DealsView from "../deals/DealsView";



const DealsCards = ({ data, path }) => {
    const [selectedOption, setSelectedOption] = useState(null);

    useEffect(() => {
        setSelectedOption({
            value: data.sizes[0]._id,
        });
    }, []);

    const combineItems = () => {
        const { chooseItems } = data;
        const items = Object.keys(chooseItems)
            .filter((key) => chooseItems[key] > 0)
            .map((key) => {
                const quantity = chooseItems[key];
                const itemName = quantity > 1 ? key : key.slice(0, -1); // remove 's' for singular items
                return `${quantity} ${itemName}`;
            });
        return items.join(", ");
    };

    const alt = `${combineItems()}${data?.defaultItems?.length > 0
        ? `, ${data.defaultItems
            .map((item) =>
                item.replace(/\//g, "/\u200B") // Only replace slashes, leave spaces as regular spaces
            )
            .join(", ")}`
        : ""
        }`;

    return (


        <Dialog>

            <div className="flex flex-col justify-between bg-white shadow-sm rounded-md max-w-xs w-full newshadow ">
                <div>
                    {" "}
                    <Link
                        href={{
                            pathname: path ? `${path}/deals/deals_view` : `deals/deals_view`,
                            query: { card_id: data?._id, size_id: selectedOption?.value },
                        }}
                    >
                        <img
                            src={data.banner}
                            alt={alt}
                            className="rounded-t-md w-full object-cover"
                        />
                    </Link>
                    <div className="px-3">
                        <div className="mt-3">
                            {" "}
                            <h2 className="text-xl font-semibold mb-1">
                                {data.title}
                            </h2>
                            {/* <p>{data?.sizes.length === 1 ? data.sizes[0].size </p> */}
                            <p className="text-sm font-semibold text-gray-500 mb-1">
                                {combineItems()}
                                {data?.defaultItems.length > 0 && ", "}
                                {data?.defaultItems.map((item, index) => (
                                    <React.Fragment key={index}>
                                        {index === data.defaultItems.length - 1
                                            ? item.replace(/ /g, "\u00A0")
                                            : `${item.replace(/ /g, "\u00A0")}, `}
                                    </React.Fragment>
                                ))}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-3 mb-1 ">
                    <div className="max-w-sm mx-2 flex gap-1">
                        {data.sizes?.length === 1 ? (
                            <div className="w-full p-2 border border-gray-300 rounded-lg bg-gray-200 text-gray-500">
                                {`Pizza Size ${data.sizes[0].size} - £ ${data.sizes[0].price}`}
                            </div>
                        ) : (
                            // <Select
                            //     className="w-full"
                            //     placeholder={`Pizza Size ${data.sizes[0].size} - £ ${data.sizes[0].price}`}
                            //     options={data.sizes.map((size) => ({
                            //         label: `Pizza Size ${size.size} - £ ${size.price}`,
                            //         value: size._id,
                            //     }))}
                            //     onChange={(option) => setSelectedOption(option)}
                            // />


                            <Select
                                onValueChange={(value) => {
                                    setSelectedOption(value);
                                }}
                                name="pizzas"
                                id="pizzas"
                                defaultValue={data.sizes[0]?._id}
                            >
                                <SelectTrigger className="w-full">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    {data.sizes.map((size, idx) => {
                                        return (
                                            <SelectItem
                                                key={idx}
                                                value={size._id}
                                                data-label={`Pizza Size ${size.size} - £ ${size.price}`}>
                                                {`Pizza Size ${size.size} - £ ${size.price}`}
                                            </SelectItem>
                                        )
                                    })}

                                </SelectContent>
                            </Select>



                        )}
                        
                        <DialogTrigger asChild>
                            <div className="hover:bg-green-700 bg-green-600 text-white p-2 rounded-lg" >
                                <p>Go</p>
                            </div>
                        </DialogTrigger>

                    </div>
                </div>
            </div>

            {/* modal content below */}
            <DialogContent className="max-h-[95vh] md:max-w-[95vw]">
                <DialogHeader>
                    <DialogTitle>Customize Pizza</DialogTitle>
                    {/* <DialogDescription>
                        Make changes to your profile here. Click save when you're done.
                    </DialogDescription> */}
                </DialogHeader>
                <DealsView cardId={data?._id} sizeId={selectedOption} />
                <DialogFooter>
                    <Button type="submit">Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default DealsCards;
