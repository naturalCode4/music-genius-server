import React, {useState} from "react"

function Slider({ filterLevel, updateFilterLevel, sliderIsDisabled}) {

    console.log(filterLevel)

    return (
        <div className="slider">
            <input 
                className="custom-slider"
                type="range"
                min="1"
                max="100"
                step="1"
                value={filterLevel}
                onChange={e => updateFilterLevel(filterLevel, e.target.value)} // filterLevel here is string?
            />
        </div>
    )
}

export default Slider