import React from "react"
import SliderAndSwitch from "./SliderAndSwitch"

function Filters() {

    const filters = [1, 2, 3, 4, 5, 6]

    return (
        <div id="filters">{
            filters.map(filter => {
                return (
                    <SliderAndSwitch 
                        filter={filter}
                        key={`${filter}`}
                    />
                )
            })
        }</div>
    )
}

export default Filters