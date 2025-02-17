import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

const Card = ({ data }) => {
    return (
        <div
            className="flex relative flex-col justify-between bg-white rounded-md max-w-[17rem]  2xl:max-w-xs w-full newshadow mb-10 "
        >
            <div className="">
                <Image
                    src={data?.banner}
                    alt={data?.pizzaName}
                    width={500}
                    height={500}
                    className="h-52 w-full rounded-t-md object-cover"
                />
            </div>
            <div className="flex  absolute justify-end  w-full">
                {" "}
                <div
                    className={` rounded-md  w-6 h-6 border-2 flex justify-center items-center bg-white ${data?.filter?.filter === ("Vegetarian" || "VEGETARIAN")
                        ? "border-green-600" : "border-red-800"
                        }`}
                >
                    {/* <RiCheckboxBlankCircleFill
                        size={20}
                        className={`${data?.filter?.filter === ("Vegetarian" || "VEGETARIAN")
                            ? "text-green-600 "
                            : "text-red-800"
                            }`}
                    /> */}
                </div>
            </div>
            <div className=" h-full px-2">
                <div className="mt-3">
                    <h3 className="text-xl font-semibold mb-1 ">{data?.pizzaName} <div className="text-red-800">(20% Off on Collection)</div></h3>
                    <p className="text-sm font-semibold text-gray-500 mb-4 whitespace-wrap overflow-hidden ">
                        {/* {combineNames()} */}
                    </p>
                </div>
            </div>

            <div className="mt-3 mb-1 ">
                <div className="">
                    <select
                        // onChange={handleChange}
                        // value={selectedData}
                        name="pizzas"
                        id="pizzas"
                        className="border-2 mx-auto p-2 w-full"
                    >
                        {data?.priceSection.map((data, idx) => {
                            return (
                                <option
                                    key={idx}
                                    value={data?.size?._id}
                                    data-label={`${data?.size?.name}-${data?.price}`}
                                >
                                    {`${data?.size?.name} £ ${data?.price}`}
                                </option>
                            );
                        })}
                    </select>
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
                        href={`/menu/product/customisePizza`}
                    >
                        {/* <TbEdit size={30} className="text-slate-800 hover:text-red-800" /> */}
                    </Link>
                    <div className="bg-green-600 hover:bg-green-700 rounded-lg flex items-center justify-center w-full">
                        <button
                            //   onClick={() => {
                            //     selectedData &&
                            //       dispatch(
                            //         addToCart({
                            //           name: data?.pizzaName,
                            //           img: data?.banner,
                            //           size: selectedLabel,
                            //           id: uniquePizzaId,
                            //           quantity: 1,
                            //           price: Number(selectedLabel.split("-")[1]),
                            //           totalSum: Number(selectedLabel.split("-")[1]),
                            //           discount: (Number(selectedLabel.split("-")[1]) * 0.2).toFixed(2),
                            //         })
                            //       );
                            //   }}
                            className="text-center rounded-lg w-full p-2 text-white"
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

export default Card