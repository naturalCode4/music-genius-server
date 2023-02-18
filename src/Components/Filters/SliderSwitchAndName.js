import React from "react"
import Slider from "./Slider.js"
import Switch from "./Switch.js"

function SliderSwitchAndName({filterInfo, updateFilterLevel, updateFilterDisabled}) {

    return (
        <div className="slider_switch_and_name">
            <p className="filter_name engraved_text">{filterInfo.name}</p>
            <Slider 
                filterInfo={filterInfo}
                updateFilterLevel={updateFilterLevel}
                />
            <Switch 
                filterInfo={filterInfo}
                updateFilterDisabled={updateFilterDisabled}
            />
        </div>
    )
}

export default SliderSwitchAndName