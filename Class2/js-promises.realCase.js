// Ejemplo real de uso de promesas simulando un caso real


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


// Funcion que obtiene un usuario del servidor mediante una promesa
function obtenerUsuario(id) {
    console.log('Iniciando búsqueda...')
    return new Promise((resolve, reject) => {
        // Simulamos el tiempo que tarda en responder el servidor
        setTimeout(() => {
            const usuario = baseDeDatos.usuarios[id]

            if (usuario) {
                resolve(usuario)
            } else {
                reject('Usuario no encontrado')
            }
        }, 1000);
    })
}
// Funcion que obtiene los posts de un usuario
function obtenerPosts(usuarioId) {
    console.log('Iniciando búsqueda...')
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const posts = baseDeDatos.posts[usuarioId]
            if (posts) {
                resolve(posts)
            } else {
                reject('Posts no encontrados')
            }
        }, 1000);
    })
}

function getOneUser(id){
    obtenerUsuario(id)
        .then((resultado) => {console.log('El usuario es: ', resultado)})
        .catch((error) => {console.log('Error: ', error)})
        .finally(console.log('Búsqueda completada'))
}

function getOneUserPosts(userId){
    obtenerUsuario(userId)
        .then((user) => {
            console.log('El user es: ', user)
            return obtenerPosts(user.id)
        })
        .then((posts) => {
            console.log('Los posts del user son: ', posts)
        })
        .catch((error) => {console.log('Error: ', error)})
        .finally(console.log('Búsqueda completada'))
}

getOneUser(1)
getOneUserPosts(2)