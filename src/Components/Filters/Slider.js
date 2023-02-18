import React from "react"
import '../../css/Slider.css'

function Slider({ filterInfo, updateFilterLevel}) {
    
    return (
        <div className="slider">
            <input 
                className="custom-slider"
                type="range"
                min="1"
                max="100"
                step="1"
                value={filterInfo.value}
                disabled={filterInfo.disabled} // not controlling
                onChange={e => updateFilterLevel(filterInfo.key, e.target.value)}
            />
        </div>
    )
}

export default Slider