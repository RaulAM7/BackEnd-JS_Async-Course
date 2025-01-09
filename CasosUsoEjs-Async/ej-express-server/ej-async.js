/*  EJEMPLO DE ASINCRONIA EN SERVIDOR DE EXPRESS

Servidor con Express
Implementaremos un servidor que:

Rutas:

/usuarios: Simula la obtención de usuarios con una operación asincrónica (con async/await y un retraso artificial).
/procesar: Simula el procesamiento de datos:
Primero, procesaremos varias tareas en paralelo con Promise.all.
Después, realizaremos un paso adicional dependiente usando await secuencial.
Características:

Usamos middleware de Express como express.json() para manejar datos JSON.
Manejamos errores con try...catch.

*/

// DEPENDENCIAS
const express = require('express')


// Creamos el objeto app de express
const app = express()



// Middleware
app.use(express.json()) // Para manejar JSON

const baseDeDAtos = {
    usuarios:   {
        1: {name: Ana, apellido: Mendoza},
        2: {name: Carmen, apellido: Mendoza}
    },
    posts: {
        1: [
            {id: 1, content: 'Primer post'},
            {id: 2, content: 'Segundo post'}
        ],
        2: [
            {id: 3, content: 'Tercer post'},
            {id: 4, content: 'Cuarto post'}
        ],
    }
}

// Funcion asincronica para obtener un user en funcion de la id
async function getUser(id) {
    return new Promise((resolve, reject) => {
        console.log('Iniciando tarea user retrieving')

        setTimeout(() => {
            const user = baseDeDAtos.usuarios[id]
            user ? resolve(user) : reject('Error')
        }, 2000);
    })
}











module.exports = app