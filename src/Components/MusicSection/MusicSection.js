import React from "react"
import Chart from "./Chart"
import GenreSelect from "./GenreSelect"
import SongSection from "./SongSection/SongSection"

function MusicSection() {
    return (
        <div id="music_section">
            <GenreSelect/>
            <SongSection/>
            <Chart/>
        </div>
    )
}

export default MusicSection