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
