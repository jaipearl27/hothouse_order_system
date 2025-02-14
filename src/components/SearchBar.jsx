"use client"

import Card from "./Card"

const SearchBar = () => {
    return (
        <div className="w-full h-14 bg-emerald-600 rounded-xl">
            <input type="text" placeholder="Search" className="w-full h-full rounded-xl p-2" />
            <div className="grid grid-cols-4 gap-2 p-2">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default SearchBar