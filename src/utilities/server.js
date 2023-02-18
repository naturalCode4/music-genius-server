import express from 'express'
import cors from 'cors'
import axios from 'axios'

import {createRequestConfigurationForSpotifySongRecommendation, tokenRequestAuthOptions, data, spotifyTokenURL, spotifyRecommendationBaseURL} from './spotifyAuthorization.js'

const app = express()
app.use(express.json())
app.use(cors())


app.post('/songRec', async (req, res) => {
    console.log('hit /songRec')
    try {
        console.log('hit /songRec try')
        const songRecommendation = await getSongRecommendation(req.body.filters)
        res.status(200).send(JSON.stringify(songRecommendation))
    }
    catch (err) {
        console.log('hit /songRec catch')
        console.log('Error @ /songRec endpoint ==>:', err.response.status)
        res.status(400).send()
    }
})

let token = 'not declared yet'
let retried = false

const getSongRecommendation = ({ genre, danceability, energy, valence, acousticness, instrumentalness, popularity }) => {
    
    console.log('hit getSongRecommendation', { genre, danceability, energy, valence, acousticness, instrumentalness, popularity})

    const generateVariator = () => {
        let variator = Math.random() < .5 ? -1 : 1
        variator = variator*.25*Math.random()
        return variator
    }

    const reverseFilterValue = (value, mid) => {
        const reversedFilterValue = mid-(value-mid)
        console.log('reversedFilterValue', reversedFilterValue)
        return reversedFilterValue
    }

    let parameters = `?limit=1`
    if (genre) parameters += `&seed_genres=${genre.toLowerCase()}`
    if (danceability) parameters += `&target_danceability=${(danceability/100)+generateVariator()}`
    if (energy) parameters += `&target_energy=${(energy/100)+generateVariator()}`
    if (valence) parameters += `&target_valence=${(valence/100)+generateVariator()}`
    if (acousticness) parameters += `&target_acousticness=${(acousticness/100)+generateVariator()}`
    if (instrumentalness) parameters += `&target_instrumentalness=${((reverseFilterValue(instrumentalness, 50)/100)+generateVariator())}` // need to reverse
    if (popularity) parameters += `&target_popularity=${(Math.floor(((popularity/100)+generateVariator())*100))}`

    return new Promise((resolve, reject) => {
        console.log('parameters:', parameters);
        axios.get(`${spotifyRecommendationBaseURL}${parameters}`, createRequestConfigurationForSpotifySongRecommendation(token))
            .then(res => {

            console.log('.then of getSongRecommendation. song: ', res.data.tracks[0].name)

            const trackName = res.data.tracks[0].name
            const artistName = res.data.tracks[0].artists[0].name
            const albumName = res.data.tracks[0].album.name
            const trackLink = res.data.tracks[0].external_urls.spotify
            const albumCover = res.data.tracks[0].album.images[1].url
            const sampleLink = res.data.tracks[0].preview_url
            
            resolve ({trackName, artistName, albumName, trackLink, albumCover, sampleLink})
            
            })
            .catch(async err => {
                console.log('Error resolving spotifyRecommendation call ==>:', err.response.status, err.message)
                if (err.response.status === 401 && !retried) {
                    // get new token below on fail
                    try {
                        const tokenRes = await axios.post(spotifyTokenURL, data, tokenRequestAuthOptions) 
                        token = tokenRes.data.access_token
                        // retry here.
                        console.log('obtained token:', token)
                    }
                    catch(err) {
                        console.log('Error retrying spotify token request ', err.response.status)
                        return
                    }
                    if (token !== 'not declared yet') { // doesnt account for expired token, which is what we want. we want to retry on any 401 error
                        console.log('retrying getSongRecommendation with new token')
                        const retriedSongRecommendation = await getSongRecommendation({genre, danceability, energy, valence, acousticness, instrumentalness, popularity})
                        resolve (retriedSongRecommendation)
                    } else {
                        console.log('still no token after token refetch. something went wrong.')
                    }
                }
            })
            .finally(() => {
                retried = false
            })
    })
}

const port = process.env.PORT || 1447

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})