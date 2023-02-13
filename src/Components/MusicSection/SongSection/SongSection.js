import React from "react"
import AudioPanel from "./AudioPanel.js"
import NewSongButton from "./NewSongButton.js"
import SongDisplay from "./SongDisplay.js"

function SongSection({filterLevels, selectedGenre}) {
    return (
        <div id="song_section">
            <SongDisplay
                filterLevels={filterLevels}
                selectedGenre={selectedGenre}
            />
            <AudioPanel/>
            <NewSongButton
                filterLevels={filterLevels}
                selectedGenre={selectedGenre}
            />
        </div>
    )
}

export default SongSection