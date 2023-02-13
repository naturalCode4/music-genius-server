import React from "react"
import SliderSwitchAndName from "./SliderSwitchAndName.js"
import { filterNames } from "../../utilities/utilities.js";

function Filters({filterLevels, updateFilterLevel}) {

    // es possibile por solo el estado que cambia actualizar
    // memoize

    const formattedFilterLevelsAndNames = []
    
    for (const filterLevel in filterLevels) {
        formattedFilterLevelsAndNames.push([filterLevel]);
      }
    
    for (let i=0; i<filterNames.length; i++) {
        formattedFilterLevelsAndNames[i].push(filterNames[i])
    }

    console.log('formattedFilterLevelsAndNames', formattedFilterLevelsAndNames)
    
    return (
        <div id="filters">{
            formattedFilterLevelsAndNames.map(filterLevelAndName => {
                return (
                    <SliderSwitchAndName 
                        filterLevel={filterLevelAndName[0]} // is this an actual working reference to state variable?
                        updateFilterLevel={updateFilterLevel}
                        name={filterLevelAndName[1]}
                        key={filterLevelAndName[1]}
                    />
                )
            })
        }</div>
    )
}

export default Filters