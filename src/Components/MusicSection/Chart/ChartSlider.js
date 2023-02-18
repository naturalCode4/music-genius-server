import React from "react"

function ChartSlider({filterInfo}) {

    console.log('filterInfo.disabled', filterInfo.disabled)
    
    return (
        <input 
            className={"chart-input " + (filterInfo.disabled ? "chart-input-disabled" : "")}
            type='range'
            orient='270deg'
            min='10' 
            max='100' 
            step='10'
            value={filterInfo.value}
            disabled={filterInfo.disabled}
        />
    )
}

export default ChartSlider