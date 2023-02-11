import React, {useState} from "react"

function Slider({ filter, setFilter, sliderIsDisabled }) {

    console.log(filter)
    return (
        <div className="slider">
            <input 
                className="custom-slider"
                type="range"
                min="1"
                max="100"
                step="1"
                value={filter}
                onChange={e => setFilter(e.target.value)}
            />
        </div>
    )
}

export default Slider