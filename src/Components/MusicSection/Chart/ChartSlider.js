import React from "react"

function ChartSlider({filterInfo}) {

    return (
        <input 
            className="chart-input"
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