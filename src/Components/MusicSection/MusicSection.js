import React from "react"
import Chart from "./Chart.js"
import GenreSelect from "./GenreSelect.js"
import SongSection from "./SongSection/SongSection.js"

function MusicSection({selectedGenre, setSelectedGenre, filterLevels}) {


    return (
        <div id="music_section">
            <GenreSelect
                selectedGenre={selectedGenre}
                setSelectedGenre={setSelectedGenre}
              />
            <SongSection
                filterLevels={filterLevels}
                selectedGenre={selectedGenre}
            />
            <Chart/>
        </div>
    )
}

export default MusicSection