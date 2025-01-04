// Casos de uso para Async Wait básicos en node

// Modulo fs para manejar archivos

const fs = require('fs').promises
const axios = require('axios')


async function readFile() {
    try {
        const data = await fs.readFile(__dirname + '/archivo.txt', 'utf-8')
        console.log('El contenido del archivo es: ', data)
    } catch(error) {
        console.log('Error al leer el archivo, ', error)
    }
}
// readFile()

async function getPokeData(name) {
    try {
        const pokeData = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        console.log(`Los datos del pokemon ${name}, son: `)
        console.log(pokeData)
    } catch(error) {
        console.log('Error al getear datos de Pokemon: ', error)
    }
}

getPokeData('ditto')