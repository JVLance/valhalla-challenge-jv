const API_IMDB = require('./Imdb.js')

class Challenge {

    #filter 
    #directors
    #actors
    #totalDuration 

    constructor(filter){
        //Private attributes
        this.#filter         = filter
        this.#directors      = []
        this.#actors         = []
        this.#totalDuration  = 0
    }

    //getting movies details
    async getMovies(){

        const movies = await API_IMDB.searchMoviesByTitleKey(this.#filter)
        
        const details = await Promise.all(
            movies.results
            //Some movies not include the filter word in title, but it's returned from the api because the string is in the description. Deleted those
                .filter(movie => movie.title.toLowerCase().includes(this.#filter))
                .map(movie => API_IMDB.getFullyDetailsByIdMovie(movie.id))
        )
        
        return details.map((detail, index) => {

            //If detail title is null, return search result title
            const title         = detail.title || movies.results[index].title
            const year          = detail.year || 'Año no especificado'
            const type          = detail.type || 'Desconocido'
            const releaseDate   = detail.releaseDate || 'Sin fecha'
            const runtimeMins   = detail.runtimeMins || 0

            if (Array.isArray(detail.directorList)){
                this.#directors.push(...detail.directorList.map(item => item.name))    
            }

            if (Array.isArray(detail.starList)){
                this.#actors.push(...detail.starList.map(item => item.name))
            }
            
            this.#totalDuration += parseInt(detail.runtimeMins) || 0

            return ` ${title} (${year}) - Tipo: ${type} - Fecha de salida: ${releaseDate} - Duración: ${runtimeMins}`
        })
        
    }

    //getters

    get directorsList(){
        return this.#directors
    }

    get actorsList(){
        return this.#actors
    }

    get totalDuration(){
        return this.#totalDuration
    }
} 

module.exports = Challenge