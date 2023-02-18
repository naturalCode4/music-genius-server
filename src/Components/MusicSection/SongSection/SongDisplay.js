import React from "react"

function SongDisplay({songInfo}) {
    return (
        <div id="song_display">
            {songInfo.albumCover && <div id="song_display_image"><img src={songInfo.albumCover} alt="<album cover unavailable>"/></div>}
            {songInfo.trackName && <div id="song_display_text">
                <p>TRACK: {songInfo.trackName}</p>
                <p>ARTIST: {songInfo.artistName}</p>
                <p>ALBUM: {songInfo.albumName}</p>
                <p><a href={songInfo.trackLink} target="_blank">Listen on Spotify</a></p>
            </div>}
          
        </div>
    )
}

export default SongDisplay