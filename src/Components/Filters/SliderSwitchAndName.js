import React, {useState} from "react"
import Slider from "./Slider.js"
import Switch from "./Switch.js"

function SliderSwitchAndName({filterLevel, updateFilterLevel, name}) {

    const [sliderIsDisabled, setSliderIsDisabled] = useState(false)

    console.log('name', `${filterLevel}`)
    console.log('filter level', filterLevel)

    return (
        <div className="slider_and_switch">
            <p className="filter_name">{name}</p>
            <Slider 
                filterLevel={filterLevel}
                updateFilterLevel={updateFilterLevel}
                sliderIsDisabled={sliderIsDisabled}
            />
            <Switch 
                setSliderIsDisabled={setSliderIsDisabled}
            />
        </div>
    )
}

export default SliderSwitchAndName