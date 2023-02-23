import React, {useState} from "react"
import AudioPanel from "./AudioPanel.js"
import NewSongButton from "./NewSongButton.js"
import SongDisplay from "./SongDisplay.js"

function SongSection({filterLevels, selectedGenre}) {

    const [songInfo, setSongInfo] = useState({
        trackName: null, 
        artistName: null, 
        albumName: null, 
        trackLink: null, 
        albumCover: null, 
        sampleLink: null
    })

    const [gettingNewSong, setGettingNewSong] = useState(false)

    return (
        <div id="song_section">
            <SongDisplay
                songInfo={songInfo}
                gettingNewSong={gettingNewSong}
            />
            <AudioPanel
                songInfo={songInfo}
            />
            <NewSongButton
                filterLevels={filterLevels}
                selectedGenre={selectedGenre}
                setSongInfo={setSongInfo}
                setGettingNewSong={setGettingNewSong}
            />
        </div>
    )
}

export default SongSection