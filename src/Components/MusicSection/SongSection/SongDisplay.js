import React from "react"
import '../../../css/Spinner.css'
import reactLogo from '../../../reactlogo.svg'

function SongDisplay({songInfo, gettingNewSong}) {
    return (
        <div id="song_display" style={{justifyContent: gettingNewSong ? 'center' : 'space-between'}}>
            {!gettingNewSong ?
                songInfo.trackName && 
                    <>
                        <div id="song_display_image"><img src={songInfo.albumCover} alt="<album cover unavailable>"/></div>
                        <div id="song_display_text">
                            <p>TRACK: {songInfo.trackName}</p>
                            <p>ARTIST: {songInfo.artistName}</p>
                            <p>ALBUM: {songInfo.albumName}</p>
                            <p><a href={songInfo.trackLink} rel="noreferrer" target="_blank">Listen on Spotify</a></p>
                        </div>
                    </>
            :   
                    <div>
                        <img src={reactLogo} id="loading_spinner" alt="Loading..." />
                    </div>}
        </div>
        
    )
}

export default SongDisplay