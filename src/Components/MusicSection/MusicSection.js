import React from "react"
import Chart from "./Chart"
import GenreSelect from "./GenreSelect"
import SongSection from "./SongSection/SongSection"

function MusicSection({selectedGenre, setSelectedGenre}) {
    return (
        <div id="music_section">
            <GenreSelect
                selectedGenre={selectedGenre}
                setSelectedGenre={setSelectedGenre}
              />
            <SongSection/>
            <Chart/>
        </div>
    )
}

export default MusicSection