// Ejercicio práctico - REFACTORIZAR CALLBACKS CON PROMISES

// Simulamos una base de datos
const baseDeDatos = {
    usuarios: {
        1: {id: 1, nombre: 'Ana', email: 'ana@gmail.com'},
        2: {id: 2, nombre: 'Carlos', email: 'carlos@gmail.com'}
    },
    posts: {
        1: [
            {id: 1, texto: 'Hola mundo'},
            {id: 2, texto: 'Hola mundo2'}
        ],
        2: [
            {id: 3, texto: 'Hola mundo3'},
        ]   
    }
}

// Ejemplo de consulta con Callbacks

function retornarUsuariosCallback(callback, id) {
    console.log('Consultando datos con API')

    setTimeout(() => {
        const user = baseDeDatos.usuarios[id]
        callback(user)
    }, 3000);
}

retornarUsuariosCallback((user) => {
    console.log('Este es el usuario: ', user)
}, 1)

// Refactorizando con una funcion base que retorna una promise que se encarga de retornar un user
function obtenerUnUser(id) {
    console.log('Consultando datos con API')
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = baseDeDatos.usuarios[id]
            user ? resolve(user) : reject('Error consultando base de datos')
        }, 3000);
    })
}

function getOneUser(id){
    obtenerUnUser(id)
        .then((user) => {
            console.log('El usuario es: ', user)
        })
        .catch()
}