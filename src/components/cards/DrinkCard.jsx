import React, { useEffect, useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/Select';
import { useDispatch } from "react-redux";
import { addToCart } from "@/lib/features/cart/cartSlice";

export default function DrinksCard({ data }) {

    const dispatch = useDispatch();

    const [selectedPriceID, setselectedPriceID] = useState(null);

    useEffect(() => {
        setselectedPriceID(data?.price[0]?._id);
    }, []);


    function handleAddDrinkToCart() {

        const selectedPriceData = data?.price.find(price => price._id === selectedPriceID)
        const selectedDrink = {
            label: selectedPriceData.drinkType,
            value: selectedPriceData._id,
            price: selectedPriceData.price,
            img: data?.banner,
            name: data?.drink,
            size: selectedPriceData.drinkType,
        }

        dispatch(
            addToCart({
              _id:data?.id,
              id: data?.id + selectedDrink?.value,
              name: selectedDrink?.name,
              img: selectedDrink?.img,
              size: `${selectedDrink?.size}-${selectedDrink.price}`,
              quantity: 1,
              price: Number(selectedDrink.price * 1).toFixed(2),
              totalSum: Number(selectedDrink.price * 1).toFixed(2),
            })
          );


    }

    return (

        <div className="flex relative flex-col justify-between bg-white shadow-[0_0_2px#000] rounded-md max-w-[17rem]  2xl:max-w-xs w-full mb-10 hover:shadow-[0_0_4px#000000]" key={data?._id}>

            <h2 className="text-2xl xl:text-3xl text-center font-semibold mb-1">{data.drink}</h2>
            <div className="space-y-4 mt-2">
                {data.price?.length === 1 ? (
                    <div className="w-full p-2 border border-gray-300 rounded-lg bg-gray-200 text-gray-500">
                        {`${data.price[0].drinkType}  £ ${data.price[0].price}`}
                    </div>
                ) : (

                    <Select
                        onValueChange={(value) => {
                            setselectedPriceID(value);
                        }}
                        name="drinks"
                        id="drinks"
                        defaultValue={
                            data?.price[0]?._id
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
                                        value={drinkItem?._id}
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
                    onClick={() =>
                        handleAddDrinkToCart()
                    }
                >
                    <p className="text-center p-2 text-white">Add</p>
                </div>
            </div>
        </div>

    );
}
