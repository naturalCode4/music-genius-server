import React from "react"
import SliderSwitchAndName from "./SliderSwitchAndName"

function Filters({filtersAndSetFiltersPackage}) {

    // es possibilmente por solo el estado que cambio actualizar
    
    return (
        <div id="filters">{
            filtersAndSetFiltersPackage.map(filterAndSetFilterAndName => {
                return (
                    <SliderSwitchAndName 
                        filter={filterAndSetFilterAndName[0]}
                        setFilter={filterAndSetFilterAndName[1]}
                        name={filterAndSetFilterAndName[2]}
                        key={`${filterAndSetFilterAndName[2]}`}
                    />
                )
            })
        }</div>
    )
}

export default Filters