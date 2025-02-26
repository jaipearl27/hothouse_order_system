"use client"

import Card from "./PizzaCard"

const SearchBar = () => {
    return (
        <div className="w-full h-14 bg-emerald-600 rounded-xl">
            <input type="text" placeholder="Search" className="w-full h-full rounded-xl p-2" />
        </div>
    )
}

export default SearchBar