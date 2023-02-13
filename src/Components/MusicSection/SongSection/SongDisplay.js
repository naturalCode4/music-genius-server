import React from "react"

function SongDisplay({songInfo}) {
    return (
        <div id="song_display">
            <p>SongDisplay</p>
            <p>trackName: {songInfo.trackName}</p>
            <p>artistName: {songInfo.artistName}</p>
            <p>albumName: {songInfo.albumName}</p>
            <p>trackLink: {songInfo.trackLink}</p>
            <p>albumCover: {songInfo.albumCover}</p>
            <p>sampleLink (if exists): {songInfo.sampleLink}</p>
          
        </div>
    )
}

export default SongDisplay