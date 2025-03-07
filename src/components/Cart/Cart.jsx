"use client"

import { useEffect, useState } from "react";
// import { useAppSelector } from "@/lib/hooks";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"
import CartItems from "./CartItems"
import { useDispatch, useSelector } from "react-redux";
import { setOrderType } from "@/lib/features/cart/cartSlice";
// import { useSelector } from "react-redux";

const Cart = () => {
    const dispatch = useDispatch();
    const {totals, orderType } = useSelector((state) => state.cart);
    // console.log(totals, 'totals')

    return (
        <div className="w-3/12 min-w-[400px] flex flex-col bg-blue-gray-50 h-full bg-white pr-4 pl-2 py-4">
            <div className="bg-white rounded-3xl grid grid-rows-[65vh_auto] h-full shadow-[0_0_5px_5px#f1f1f1]">

                <Tabs defaultValue="collection" className="w-full h-full grid grid-rows-[2rem_auto]">
                    <TabsList className={"w-full"}>
                        <TabsTrigger
                            value="collection"
                            className="w-full"
                            onClick={() => {
                                dispatch(setOrderType('collection'))
                            }}
                        >
                            Collection
                        </TabsTrigger>
                        <TabsTrigger
                            value="delivery"
                            className="w-full"
                            onClick={() => {
                                dispatch(setOrderType('delivery'))
                            }}
                        >Delivery</TabsTrigger>
                        <TabsTrigger
                            value="takeaway"
                            className="w-full"
                            onClick={() => {
                                dispatch(setOrderType('takeaway'))
                            }}
                        >Takeaway</TabsTrigger>
                    </TabsList>

                    <div className="overflow-auto max-h-full p-2">
                        <TabsContent value="collection">
                            <CartItems />
                        </TabsContent>
                        <TabsContent value="delivery">
                            <CartItems />
                        </TabsContent>
                        <TabsContent value="takeaway">
                            <CartItems />
                        </TabsContent>
                    </div>

                </Tabs>

                <div className="flex flex-col justify-between h-full w-full text-center p-2 py-4">
                    <div className="flex justify-between mb-3 text-base font-semibold text-blue-gray-700">
                        <div className="flex flex-col justify-center">Items Total:</div>
                        <div className="flex flex-col justify-center text-right text-xl w-1/2">£ {totals.itemsTotal.toFixed(2)}</div>
                    </div>
                    <div className="flex justify-between mb-3 text-base font-semibold text-blue-gray-700">
                        <div className="flex flex-col justify-center">Discount:</div>
                        <div className="flex flex-col justify-center text-right text-xl w-1/2 text-red-700">£ {totals.discount.toFixed(2)}</div>
                    </div>

                    <div className="flex justify-between mb-3 text-lg font-semibold text-blue-gray-700">
                        <div className="flex flex-col justify-center text-3xl">To Pay:</div>
                        <div className="flex flex-col justify-center text-right text-3xl w-1/2">£ {totals?.totalPrice.toFixed(2)}</div>
                    </div>

                    <button
                        className="text-white rounded-2xl text-lg w-full py-3 focus:outline-none bg-red-700 hover:bg-red-900"
                    >
                        Proceed
                    </button>
                </div>

            </div >
        </div >
    )
}

export default Cart