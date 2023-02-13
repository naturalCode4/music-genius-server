import React from "react"
import SliderSwitchAndName from "./SliderSwitchAndName.js"
import { filterNames } from "../../utilities/utilities.js";

function Filters({filterLevels, updateFilterLevel, updateFilterDisabled}) {

    // es possibile por solo el estado que cambia actualizar
    // memoize
    
    const formattedFilterLevelsAndNames = Object.entries(filterLevels).map((filterLevel, i) => {
        return {
            value: filterLevel[1].value,
            disabled: filterLevel[1].disabled,
            key: filterLevel[0],
            name: filterNames[i],
        }
    });
    
    return (
        <div id="filters">{
            formattedFilterLevelsAndNames.map(filterLevelAndName => {
                return (
                    <SliderSwitchAndName 
                        filterInfo={filterLevelAndName} // is this an actual working reference to state variable?
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