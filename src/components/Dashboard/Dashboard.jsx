"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/Tabs"
import Pizza from "./Pizza"
import Sides from "./Sides"
import Drinks from "./Drinks"
import Deals from "./Deals"
import Dips from "./Dips"
import Desserts from "./Desserts"


const Dashboard = () => {

    return (

        <div className="flex-grow flex">
            <div className="flex flex-col bg-blue-gray-50 h-full w-full py-4">
                <div className="flex px-2 flex-row relative">
                    <div className="absolute left-5 top-3 px-2 py-2 rounded-full bg-red-700 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <input
                        type="text"
                        className="bg-white rounded-3xl shadow-[0_0_5px_5px#f1f1f1] text-lg full w-full h-16 py-4 pl-16 transition-shadow focus:shadow-2xl focus:outline-none"
                        placeholder="Type to Search"
                        x-model="keyword"
                    />
                </div>
                <div className="h-full overflow-hidden mt-4 shadow-[0_0_5px_5px#f1f1f1] rounded-3xl">


                    <div className="h-full overflow-y-auto p-2">

                        <Tabs defaultValue="pizza" className="w-full">
                            <TabsList className={"w-full"}>
                                <TabsTrigger value="deals" className="w-full">DEALS</TabsTrigger>
                                <TabsTrigger value="pizza" className="w-full">PIZZA</TabsTrigger>
                                <TabsTrigger value="sides" className="w-full">SIDES</TabsTrigger>
                                <TabsTrigger value="drinks" className="w-full">DRINKS</TabsTrigger>
                                <TabsTrigger value="desserts" className="w-full">DESSERTS</TabsTrigger>
                                <TabsTrigger value="dips" className="w-full">DIPS</TabsTrigger>
                            </TabsList>
                            <TabsContent value="deals">
                                <Deals />
                            </TabsContent>
                            <TabsContent value="pizza">
                                <Pizza />
                            </TabsContent>
                            <TabsContent value="sides">
                                <Sides />
                            </TabsContent>
                            <TabsContent value="drinks">
                                <Drinks />
                            </TabsContent>
                            <TabsContent value="desserts">
                                <Desserts />
                            </TabsContent>
                            <TabsContent value="dips">
                                <Dips />
                            </TabsContent>
                        </Tabs>

                    </div>
                </div>
            </div>



        </div>
    )
}

export default Dashboard