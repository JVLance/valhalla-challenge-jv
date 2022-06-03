const Challenge = require('./Challenge.js')

const vikings   = new Challenge('viking')
const axe       = new Challenge('axe')


vikings.getMovies().then(details => {

    console.log('PRODUCCIONES VIKINGAS:')

    console.log('\nListado de detalles:')
    console.log(details)

    console.log('\nListado de directores:')
    console.log(vikings.directorsList)

    console.log('\nDuración total de todos los resultados en minutos:')
    console.log(vikings.totalDuration)

    console.log('\n')
})


axe.getMovies().then(details => {

    console.log('PRODUCCIONES CON HACHA:')

    console.log('\nListado de detalles:')
    console.log(details)

    console.log('\nListado de actores principales:')
    console.log(axe.actorsList)

    console.log('\nDuración total de todos los resultados en minutos:')
    console.log(axe.totalDuration)

    console.log('\n')
})
