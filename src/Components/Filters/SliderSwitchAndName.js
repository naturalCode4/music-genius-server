import React, {useState} from "react"
import Slider from "./Slider"
import Switch from "./Switch"

function SliderSwitchAndName({filter, setFilter, name}) {

    const [sliderIsDisabled, setSliderIsDisabled] = useState(false)

    console.log('filter name:', name)
    return (
        <div className="slider_and_switch">
            <p className="filter_name">{name}</p>
            <Slider 
                filter={filter}
                setFilter={setFilter}
                sliderIsDisabled={sliderIsDisabled}
                key={`${name} slider`}
            />
            <Switch 
                setSliderIsDisabled={setSliderIsDisabled}
                key={`${name} switch`}

            />
        </div>
    )
}

export default SliderSwitchAndName