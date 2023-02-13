import React from "react"
import { callServerForNewSong } from "../../../utilities/api.js"

function NewSongButton({filterLevels, selectedGenre}) {

    const formattedFilters = {
        genre: selectedGenre,
        danceability: filterLevels.danceability/100,
        energy: filterLevels.energyLevel/100,
        valence: filterLevels.mood/100,
        acousticness: filterLevels.acousticness/100,
        instrumentalness: filterLevels.instrumentalness/-100,
        popularity: filterLevels.popularity/100,
    }

    const getNewSong = () => {
        console.log('calling getNewSong')
        try {
            callServerForNewSong(formattedFilters)
            .then(newSong => {console.log('newSong:', newSong)}) // set state filters here
        } catch (err) {
            console.log('Error calling getNewSong ==>:', err)
        }
    }


    return (
        <div id="new_song_button">
            <button
                onClick={getNewSong}
            >New Song</button>
        </div>
    )
}

export default NewSongButton