import React from "react"
import Chart from "./Chart"
import GenreSelect from "./GenreSelect"
import SongSection from "./SongSection/SongSection"

function MusicSection({genre, setGenre}) {
    return (
        <div id="music_section">
            <GenreSelect
                genre={genre}
                setGenre={setGenre}
              />
            <SongSection/>
            <Chart/>
        </div>
    )
}

export default MusicSection