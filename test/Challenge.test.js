const Challenge = require('../src/Challenge.js')

const vikings   = new Challenge('viking')

test('Get movies vikings - Expect Array list', async () => {
    vikings.getMovies().then(details => {

        expect(details).toBeInstanceOf(Array)
        expect(vikings.directorsList).toBeInstanceOf(Array)
        expect(vikings.totalDuration).toBeInstanceOf(Number)
    })
})