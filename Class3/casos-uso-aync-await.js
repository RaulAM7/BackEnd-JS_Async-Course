// CASOS DE USO PENSADOS DESPUES DE DESCUBRIR LA SINTAXIS BASICA


/* 1.- FLujo de pasos dependientes

    Cuando tenemos dos tareas definidas con dos promesas y necesitamos luego en la consumisión que un paso dependa del otro
    Forzar el await estructura el flujo de manera más clara y menos messy

*/

// Ejemplo -> Tenemos una promise que obtiene usuarios y otra que retorna posts de un usuario

// Simulacion de base datos
const baseDeDatos = {
    usuarios: {
        1: {id: 1, nombre: 'Ana', email: 'ana@gmail.com'},
        2: {id: 2, nombre: 'Carlos', email: 'carlos@gmail.com'}
    },
    posts: {
        1: [
            {id: 1, texto: 'Ana: Hola mundo'},
            {id: 2, texto: 'Ana: Hola mundo2'}
        ],
        2: [
            {id: 3, texto: 'Carlos: Hola mundo3'},
        ]   
    }
}

// Promise que retorna usuario en funcion de su id
function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = baseDeDatos.usuarios[id]
            user ? resolve(user) : reject('Error encontrando user')
        }, 3000);
    })
}
// Promise que retorna posts de un usuario en funcion de su id
function getPosts(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const posts = baseDeDatos.posts[id]
            posts ? resolve(posts) : reject('Error encontrando posts')
        }, 2000);
    })
}

async function obtenerUserYPosts(id) {
    console.log('Inicio de procesos de ejecución')
    
    try {
        const user = await getUser(id)
        console.log('Este es el user:')
        console.log(user)

        const posts = await getPosts(id)
        console.log('Estos son los posts del user:')
        console.log(posts)

    } catch(error) {
        console.log('Error: ', error)
    }
    return console.log('Fin de procesos de ejecución')
}
// obtenerUserYPosts(0)