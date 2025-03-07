import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/lib/features/cart/cartSlice";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import SliderValueLabel from "@mui/material/Slider/SliderValueLabel";


const SidesCard = ({ data }) => {
    // =-----------------------hooks--------------------------------
      const dispatch = useDispatch();
    const [selectedData, setSelectedData] = useState(null);
    // const [isAddClicked, setIsAddClicked] = useState(false);
    return (
        <div
            className="flex relative flex-col justify-between bg-white shadow-[0_0_2px#000] rounded-md max-w-[17rem]  2xl:max-w-xs w-full mb-10 hover:shadow-[0_0_4px#000000]"
            key={data?._id}
        >
            {/* <img
                src={data?.banner}
                alt={data?.sideName}
                className="rounded-t-md w-full h-44 object-cover"
            /> */}
            <h3 className="text-2xl xl:text-3xl text-center font-semibold mb-1">{data?.sideName}</h3>
            <div className="my-2 space-y-2">


                <Select
                    onValueChange={(value) => {
                        console.log(value);
                        setSelectedData(SliderValueLabel);
                    }}
                    name="sides"
                    id="sides"
                    defaultValue={data?.price}
                >
                    <SelectTrigger className="w-full"  >
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        {/* {data?.priceSection.map((data, idx) => {
                            return ( */}
                        <SelectItem
                            value={data?.price}
                            data-label={`${data?.price}`}

                        >
                            {`£ ${data?.price}`}
                        </SelectItem>
                        {/* )
                        })} */}

                    </SelectContent>
                </Select>

                <div className="bg-green-600 hover:bg-green-700 flex gap-2  justify-center w-full">
                    <button
                        onClick={() => {
                            dispatch(
                              addToCart({
                                name: data?.sideName,
                                img: data?.banner,
                                size: selectedData || data?.price,
                                id: data?._id,
                                quantity: 1,
                                price: Number(selectedData || data?.price),
                                totalSum: Number(selectedData || data?.price)
                              })
                            );
                        }}
                        data-modal-target="popup-modal"
                        data-modal-toggle="popup-modal"
                        data-modal-hide="popup-modal"
                        className="text-center p-2 text-white w-full "
                        type="button"
                    >
                        Add
                    </button>
                </div>
            </div>

        </div >



    );
};

export default SidesCard;
