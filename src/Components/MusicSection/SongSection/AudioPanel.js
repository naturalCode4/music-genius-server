import React from "react"

function AudioPanel({songInfo}) {

    console.log(songInfo.trackLink)
    return (
        <div id="audio_panel">
            <audio 
                controls
                controlsList="nodownload noplaybackrate"
                // src="https://p.scdn.co/mp3-preview/1663d305b5138275a97f4592bba2862269c7c849?cid=f8a2526a0dc7469884edac2d88b21ccd"></audio>
                src={songInfo.sampleLink}></audio>
        </div>
    )
}

export default AudioPanel