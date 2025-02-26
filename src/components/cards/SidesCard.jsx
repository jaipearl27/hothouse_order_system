import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { addToCart } from "@/app/lib/features/cartSlice/cartSlice";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';


const SidesCard = ({ data }) => {
    // =-----------------------hooks--------------------------------
    //   const dispatch = useDispatch();
    const [selectedData, setSelectedData] = useState(null);
    const [isAddClicked, setIsAddClicked] = useState(false);
    return (
        <div
            className=" bg-white shadow-md rounded-md max-w-[15rem] 2xl:max-w-xs w-full newshadow mb-10 flex flex-col justify-between"
            key={data?._id}
        >
            <img
                src={data?.banner}
                alt={data?.sideName}
                className="rounded-t-md w-full h-44 object-cover"
            />
            <h3 className="text-lg font-semibold text-gray-800 px-2 py-3">{data?.sideName}</h3>
            <div>


                <Select
                    onValueChange={(value) => {
                        console.log(value);
                        // setSelectedData(Event.target.value);
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


                {/* <select
                    onChange={(Event) => {
                        //   console.log(Event.target.value);
                        setSelectedData(Event.target.value);
                    }}
                    name="pizzas"
                    id="pizzas"
                    className="border p-2 w-full rounded-t-md text-gray-500"
                >
                    <option>£ {data?.price}</option>
                </select> */}
                <div className="bg-green-600 hover:bg-green-700 flex gap-2  justify-center w-full">
                    <button
                        onClick={() => {
                            // dispatch(
                            //   addToCart({
                            //     name: data?.sideName,
                            //     img: data?.banner,
                            //     size: selectedData || data?.price,
                            //     id: data?._id,
                            //     quantity: 1,
                            //     price: Number(selectedData || data?.price),
                            //     totalSum: Number(selectedData || data?.price)
                            //   })
                            // );
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

        </div>



    );
};

export default SidesCard;
