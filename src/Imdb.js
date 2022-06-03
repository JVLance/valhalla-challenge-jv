const { default: axios } = require('axios')

require('dotenv/config')

const IMDB_API_URL = process.env.IMDB_API_URL
const IMDB_API_KEY = process.env.IMDB_API_KEY

module.exports = {
    async searchMoviesByTitleKey(title) {
        const response = await axios.get(`${IMDB_API_URL}/SearchTitle/${IMDB_API_KEY}/${title}`)
        return response.data
    },

    async getFullyDetailsByIdMovie(movieId){
        const response = await axios.get(`${IMDB_API_URL}/Title/${IMDB_API_KEY}/${movieId}`)
        return response.data
    }
}