/* 1.- ¿Qué es Async / Wait y como simplifican las promesas?

    Intro - Conceptos:
        - Async / wait -> sintaxis introducida en ES2017 para escribir codigo asincronico mas facil que las promesas
        - Async -> se utiliza antes de una función para indicar que devuelve una promesa
        - Wait -> se utiliza dentro de funciones async para esperar que una promesa se resuelva 



    Ventajas:
        - Simplifica el manejo de promesas
        - Evita el encadenamiento de muchos .then()
        - Hace que el codigo sea más legible
*/


// Ejemplo con promesas tradicionales

function promesa() {
    return new Promise((resolve, reject) => {
        resolve()
        reject()
    })
}
promesa.then((a) => a).catch((error) => error)


