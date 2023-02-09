import React from "react"
import AudioPanel from "./AudioPanel"
import NewSongButton from "./NewSongButton"
import SongDisplay from "./SongDisplay"

function SongSection() {
    return (
        <div id="song_section">
            <SongDisplay/>
            <AudioPanel/>
            <NewSongButton/>
        </div>
    )
}

export default SongSection