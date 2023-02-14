import React from "react"
import SliderSwitchAndName from "./SliderSwitchAndName.js"

function Filters({filterLevels, updateFilterLevel, updateFilterDisabled, formattedFilterLevelsAndNames}) {

    // es possibile por solo el estado que cambia actualizar
    // memoize
    
    return (
        <div id="filters">{
            formattedFilterLevelsAndNames.map(filterLevelAndName => {
                return (
                    <SliderSwitchAndName 
                        filterInfo={filterLevelAndName}
                        updateFilterLevel={updateFilterLevel}
                        updateFilterDisabled={updateFilterDisabled}
                        key={filterLevelAndName.key}
                    />
                )
            })
        }</div>
    )
}

export default Filters