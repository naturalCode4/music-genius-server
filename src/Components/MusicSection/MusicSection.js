import React from "react"
import Chart from "./Chart/Chart.js"
import GenreSelect from "./GenreSelect.js"
import SongSection from "./SongSection/SongSection.js"

function MusicSection({selectedGenre, setSelectedGenre, filterLevels, formattedFilterLevelsAndNames}) {

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
            <Chart
                formattedFilterLevelsAndNames={formattedFilterLevelsAndNames}
            />
        </div>
    )
}

export default MusicSection