const API_IMDB = require('../src/Imdb.js')

test('Search movies by title key "viking" - Expect object', async () => {
    const data = await API_IMDB.searchMoviesByTitleKey('viking')

    expect(data).toBeInstanceOf(Object)
    expect(data.results).toBeInstanceOf(Array)
})

test('Search fully detail of movie - Expect Object', async () => {
    
    const data = await API_IMDB.getFullyDetailsByIdMovie('tt5157456')

    expect(data).toBeInstanceOf(Object)
    expect(data.directorList).toBeInstanceOf(Array)
    expect(data.starList).toBeInstanceOf(Array)
})