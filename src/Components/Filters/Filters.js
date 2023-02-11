import React from "react"
import SliderSwitchAndName from "./SliderSwitchAndName"

function Filters({filtersAndSetFiltersPackage}) {

    return (
        <div id="filters">{
            filtersAndSetFiltersPackage.map(filter => {
                return (
                    <SliderSwitchAndName 
                        filter={filter[0]}
                        setFilter={filter[1]}
                        key={`${filter}`}
                    />
                )
            })
        }</div>
    )
}

export default Filters