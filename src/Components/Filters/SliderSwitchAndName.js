import React from "react"
import Slider from "./Slider"
import Switch from "./Switch"

function SliderSwitchAndName({filter, setFilter}) {
    return (
        <div className="slider_and_switch">
            <p className="filter_name">{`name: ${filter}`}</p>
            <Slider className="slider"/>
            <Switch className="switch"/>
        </div>
    )
}

export default SliderSwitchAndName