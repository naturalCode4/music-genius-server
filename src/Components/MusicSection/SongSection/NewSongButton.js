import React from "react"
import { callServerForNewSong } from "../../../utilities/api.js"

function NewSongButton({filterLevels, selectedGenre, setSongInfo}) {

    const formattedFilters = {
        genre: selectedGenre,
        danceability: filterLevels.danceability/100,
        energy: filterLevels.energyLevel/100,
        valence: filterLevels.mood/100,
        acousticness: filterLevels.acousticness/100,
        instrumentalness: filterLevels.vocalPresence/100,
        popularity: filterLevels.popularity/100,
    }

    const getNewSong = async () => {
        console.log('calling getNewSong')
        try {
            console.log('formattedFilters', formattedFilters)
            const newSong = await callServerForNewSong(formattedFilters)
            console.log('newSong', newSong.data)
            setSongInfo(newSong.data)
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