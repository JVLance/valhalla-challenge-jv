# Proyecto Vallhala Challenge por Jorge Vega

El siguiente proyecto utiliza la api pública de IMDB para devolver lo siguiente:

1. Listado de detalles, directores y total de minutos de peliculas y series cuyo titulo contenga la palabra "viking".
2. Listado de detalles, actores, y total de minutos de peliculas y series cuyo titulo contenga la palabra "axe".

El resultado es devuelto a traves de la consola.

## Requerimientos

- Nodejs v15.14.0 o mayor.

## Instalación

1. Ejecutar en el directorio raíz del repositorio:

    > npm install

2. crear archivo .env en dicho directorio, usando como base el archivo .env.example:

    > cp .env.example .env

3. Ejecutar los test:

    > npm test 

4. Finalmente, la aplicación final puede ser ejecutada con el siguiente comando:

    > npm run start