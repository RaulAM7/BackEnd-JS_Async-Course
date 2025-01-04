// Casos de uso para Async Wait básicos en node

// Modulo fs para manejar archivos

const fs = require('fs').promises

async function readFile() {
    try {
        const data = await fs.readFile(__dirname + '/archivo.txt', 'utf-8')
        console.log('El contenido del archivo es: ', data)
    } catch(error) {
        console.log('Error al leer el archivo, ', error)
    }
}

readFile()