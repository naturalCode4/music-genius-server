// const qs = require('querystring');
import qs from 'querystring'

export const spotifyRecommendationBaseURL = 'https://api.spotify.com/v1/recommendations/'

const client_id = 'f8a2526a0dc7469884edac2d88b21ccd';
const client_secret = 'e2d91181ac5d4d58a884d1758a01bf1f';

export const spotifyTokenURL = 'https://accounts.spotify.com/api/token'
export const data = qs.stringify({'grant_type':'client_credentials'}); //unused? rename.
export const tokenRequestAuthOptions = {
    headers: {
        'Authorization': 'Basic ' + Buffer.from(client_id + ':' + client_secret).toString('base64')
    },
    form: {
        grant_type: 'client_credentials'
    },
    json: true
};

export const createRequestConfigurationForSpotifySongRecommendation = (token) => {
    return { headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
    },
} 
}