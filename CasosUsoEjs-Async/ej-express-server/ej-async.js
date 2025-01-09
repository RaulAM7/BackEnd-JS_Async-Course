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
        1: {name: 'Ana', apellido: 'Mendoza'},
        2: {name: 'Carmen', apellido: 'Mendoza'}
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

// Funcion asincronica para obtener todos los usuarios
async function getAllUsers() {
    return new Promise((resolve, reject) => {
        console.log('Iniciando tarea all users retrieving')
        
        setTimeout(() => {
            const allUsers = baseDeDAtos.usuarios
            allUsers ? resolve(allUsers) : reject('Error all user retrieving')  
        }, 3000);
    })
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





// RUTAS


// RUTA "/info" para mostrar informacion del servidor

app.get("/info", (req, res) => {
    res.status(200).json(({
        mensaje: 'Servidor Express funcionando correctamente',
        hora: new Date().toLocaleString()
    }))
})

// RUTA '/usuarios' para obtener la lista de todos los usuarios
app.get("/usuarios", async (req, res) => {
    try {
        const users = await getAllUsers()
        res.status(200).json(users)
    } catch(error) {
        res.status(500).json({error: `Error encontrando usuarios: ${error}`})
    }
})







/* Middleware para rutas no definidas 
----- ¿Esto no habia que incluirlo antes de las rutas?
----- NO, lo definimos como una ruta que afecte a todas las rutas pero al final para si no encuentra ninguna ruta salte esta
*/
app.use((req,res) => {
    res.status(404).json({error: 'Ruta no encontrada'})
})


const PORT = 3000

app.listen(PORT, () => {
    console.log(`SERVIDOR INICIADO en puerto http://localhost:${PORT}`)
})


module.exports = app