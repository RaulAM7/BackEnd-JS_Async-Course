/* PREGUNTA NACIDA EN ASYNC / WAIT - BASIC SYNTAX:

    - Si lo anterior es correcto entonces no estamos yendo en contra del objetivo de la asincronia? 
    La asincronia no servia para que el flujo de codigo no tuviera que esperar a resolver esas operaciones? 
    Pero con este wait estamos forzando a que hasta que no resuelva no siga leyendo hacia abajo el codigo, 
    No entiendo por qué hacemos esto, la utilidad, parece ir en contra del objetivo de la asincronia


RESPUESTA:


3. Tu punto principal: ¿Estamos "rompiendo" la asincronía con await?
Parece que await bloquea el flujo, pero en realidad no bloquea todo el programa. Aquí está el truco:

await solo pausa la ejecución de la función async en la que se encuentra.
Mientras tanto, el resto del programa (fuera de la función async) sigue ejecutándose de forma asincrónica.

*/

// Ejemplo para entenderlo mejor
console.log('Antes de ejecución 0')

function tareaLarga() {
    console.log('Inicio de Tarea Larga')
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Tarea completada')
            reject('Error')
        }, 3000);
    })
}
console.log('Antes de ejecución 1')

async function ejecutar() {
    console.log('Inicio de ejecución')
    try {
        const resultado = await tareaLarga()
        console.log(`Este es el resultado de la Tarea Larga: ${resultado}`)
        console.log('Fin de ejecución')
    } catch (error) {
        console.log('Este es el error: ', error)
    }
}

console.log('Antes de ejecución 2')
ejecutar()
console.log('Tras ejecución 0')