import React from "react"

function Slider({ filterInfo, updateFilterLevel}) {

    console.log(filterInfo.name, filterInfo.value, filterInfo.disabled)
    
    return (
        <div className="slider">
            <input 
                className="custom-slider"
                type="range"
                min="1"
                max="100"
                step="1"
                value={filterInfo.value}
                disabled={filterInfo.key.disabled} // not controlling
                onChange={e => updateFilterLevel(filterInfo.key, e.target.value)}
            />
        </div>
    )
}

export default Slider