import React, {useState} from "react"
import {genreList} from '../../utilities'

function GenreSelect({genre, setGenre}) {

    const [showGenreDropdown, setShowGenreDropdown] = useState(false)

    console.log('genre', genre)
    console.log('showGenreDropdown', showGenreDropdown)

    return (
        <div id="genre_select">
            <div
                 onMouseEnter={() => setShowGenreDropdown(true)}
                 onMouseLeave={() => setShowGenreDropdown(false)}
            >
                <input
                    type="text"
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                    style={{height: '50px'}}
                />
                {showGenreDropdown && <div>
                    <p>{genreList}</p>
                </div>}
            </div>

        </div>
    )
}

export default GenreSelect