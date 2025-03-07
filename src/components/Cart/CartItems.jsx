import { decreaseQuantity, deletefromCart, increaseQuantity } from '@/lib/features/cart/cartSlice'
import { CarCrashTwoTone } from '@mui/icons-material'
import Image from 'next/image'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const CartItems = () => {

    const dispatch = useDispatch()

    const { cartData } = useSelector((state) => state.cart)




    // console.log("cart data", cartData)

    return (
        <>
            {Array.isArray(cartData) && cartData?.length > 0 ? cartData?.map((cartItem) => {
                const size = String(cartItem?.size).includes("-");
                // const currData = cartMap.get((cartData?._id ?? cartData?.id));
                // console.log("currData", currData)
                // const isUnavailable = currData == -1 ? true : false

                const price = String(cartItem?.size).includes("-")
                    ? cartItem?.size?.split("-")
                    : cartItem?.size;

                // const allToppings = data?.allToppings || {
                //   base: {},
                //   cheese: [],
                //   sauce: [],
                //   veg: [],
                //   meat: [],
                // };
                // const mergedToppings = [
                //   allToppings?.base?.name,
                //   ...allToppings?.cheese.map((item) =>
                //     `${item?.cheeseName} ${
                //       item?.size === "double" ? "2️⃣" : "1️⃣"
                //     }`.replace(/ /g, "\u00A0")
                //   ),
                //   ...allToppings?.sauce.map((item) =>
                //     `${item?.sauceName} ${
                //       item?.size === "double" ? "2️⃣" : "1️⃣"
                //     } `.replace(/ /g, "\u00A0")
                //   ),
                //   ...allToppings?.veg.map((item) =>
                //     `${item?.vegName} ${
                //       item?.size === "double" ? "2️⃣" : "1️⃣"
                //     }`.replace(/ /g, "\u00A0")
                //   ),
                //   ...allToppings?.meat.map((item) =>
                //     `${item?.meatName} ${
                //       item?.size === "double" ? "2️⃣" : "1️⃣"
                //     }`.replace(/ /g, "\u00A0")
                //   ),
                // ].join(", ");


                return (
                    < div key={`${cartItem?.id}cartItem`} className="select-none mb-3 bg-red-50 rounded-lg w-full text-blue-gray-700 max-h-full overflow-auto py-2 px-2 flex justify-between">
                        {/* <Image src={cartItem?.img} alt="" className="rounded-lg h-10 w-10 bg-white shadow mr-2" width={100} height={100} /> */}
                        <div className="flex flex-col justify-between ">
                            <h5 className="text-base font-semibold" >{cartItem?.name}{" "}
                                {size
                                    ? `(${price[0]})`
                                    : cartItem?.dealsData
                                        ? `(${cartItem?.size})`
                                        : cartItem?.allToppings?.size?.name
                                            ? `(${cartItem?.allToppings?.size?.name})`
                                            : ""}
                            </h5>
                            <p className="text-sm font-bold block" >
                                £ {cartItem?.totalSum}
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 justify-center items-center">
                            <div className="w-28 grid grid-cols-3 gap-2">
                                <button
                                    className="rounded-lg text-center py-1 text-white bg-red-700 hover:bg-red-800 transition duration-300 focus:outline-none"
                                    onClick={() => dispatch(decreaseQuantity({ id: cartItem?.id, quantity: 1 }))}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-3 inline-block" fill="none" viewBox="0 0 24 24" stroke="white">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M20 12H4"></path>
                                    </svg>
                                </button>
                                <div className="flex flex-col justify-center items-center bg-white rounded-lg text-center shadow focus:outline-none focus:shadow-lg text-sm" >{cartItem?.quantity}</div>
                                <button 
                                className="rounded-lg text-center py-1 text-white bg-red-700 hover:bg-red-800 transition duration-300 focus:outline-none"
                                onClick={() => dispatch(increaseQuantity({ id: cartItem?.id, quantity: 1 }))}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-3 inline-block" fill="none" viewBox="0 0 24 24" stroke="white">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                                    </svg>
                                </button>
                            </div>
                            <div className="flex flex-col justify-center items-center w-full">
                                <button className="text-red-700 hover:text-red-800 transition duration-300 focus:outline-none hover:underline"
                                    onClick={() => dispatch(deletefromCart({ id: cartItem?.id }))}
                                >
                                   Remove Item
                                </button>
                            </div>
                        </div>
                    </div >
                )
            }
            ) : (
                <div className="flex-1 w-full p-4 opacity-25 select-none flex flex-col flex-wrap content-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <p>
                        CART EMPTY
                    </p>
                </div>
            )
            }
        </>
    )
}

export default CartItems