/* Ejercicio 1: Simulación de un temporizador con Promesas
Crea una función llamada temporizador que reciba un número de segundos como argumento y devuelva una promesa que se resuelva después de esos segundos.
Objetivo:
- Usar setTimeout para simular la espera.
- Practicar cómo crear y consumir promesas.
*/
function promiseTemp(segs, variable) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            variable ? resolve(variable) : reject('Error')
        }, segs*1000);
    } )
}
function consumirTemp(segs, variable) {
    promiseTemp(segs, variable)
        .then((resultado) => {
            console.log(`Este es el resultado: ${resultado}`)
        })
        .catch((error) => {console.log(error)})
}
consumirTemp(5, 50)
/* Ejercicio 2: Simulación de consulta a una API
Crea una función consultarAPI que devuelva una promesa. 
La función debe simular la consulta a una API que tarda 2 segundos en responder con un objeto de usuario o falla con un error.
*/
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
function promiseReturnUser(id) {
    return new Promise((resolve, reject) => {
        console.log('Consultando API...')
        setTimeout(() => {
            const user = baseDeDatos.usuarios[id]
            user ? resolve(user) : reject('Usuario no encontrado')
        }, 2000);
    })
}
function getUser(id){
    promiseReturnUser(id)
    .then((user) => console.log(user))
    .catch((error) => console.log(error))
}
getUser(1)