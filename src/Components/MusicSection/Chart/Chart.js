import React from "react"
import '../../../css/Chart.css'
import ChartSlider from "./ChartSlider.js"

function Chart({formattedFilterLevelsAndNames}) {
    return (
        <div id="chart">
            <fieldset id="filters-chart">
                <legend className="filter_name text_3D">FILTERS</legend>

                <label className="chart-label" orient='270deg' type='range' for="band" before="0" after="10">5</label>

                {formattedFilterLevelsAndNames.map(filterLevelAndName => {
                    return (
                        <ChartSlider 
                            filterInfo={filterLevelAndName}
                        />
                    )
                })}

                <label className="chart-label" orient='90deg' type='range' for="band" before="10" after="0">5</label>
            
            </fieldset>
        </div>
    )
}

export default Chart