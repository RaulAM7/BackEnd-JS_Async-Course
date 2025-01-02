// ¿Qué es una PROMISE?


/*
    Es un objeto que representa la eventual finalización de una operación asincronica.

    Es un contrato que promete que se finalizará la operacion asincronica, con exito o fracaso pero SIEMPRE terminará.
    Por lo que la WebApi simpre la terminará, la mandará a la Call Queue y de ahí el Event Loop lo mandará a la Call Stack

    Los estados posibles de una Promise son:
        - pending
        - fulfilled
        - rejected


    Métodos principales:
        - .then() -> para manejar el exito
        - .catch() -> para manejar el error
        - .finally() -> siempre se ejecuta, después del then o como el catch
*/

// Ejemplo de promesa
// Definiendo la promesa
const promesa = new Promise((resolve, reject) => {
    const exito = false

    if (exito)
    {
        resolve('Promesa resulta con exito')
    }
    else
    {
        reject('Promesa resulta con fracaso')
    }
}
)

// Consumiendo la promesa
promesa
    .then((a) => {console.log(a)}) // a = 'Promesa resulta con exito'
    .catch((e) => {console.log(e)}) // b = 'Promesa resulta con fracaso'
    .finally(() => {console.log('Esto siempre se ejecuta')})




