/* . Manejo de Múltiples Operaciones Asincrónicas - PROMISE ALL
Promise.all permite ejecutar múltiples promesas en paralelo y esperar a que todas se resuelvan.
Retorna un arreglo con los resultados de cada promesa en el mismo orden.

*/
// Tenemos 3 tareas asincronicas
const paso1 = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Paso 1 completado')
        reject('Error en paso 1')
    }, 2000);
})
const paso2 = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Paso 2 completado')
        reject('Error en paso 2')
    }, 3000);
})
const paso3 = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Paso 3 completado')
        reject('Error en paso 3')
    }, 1000);
})
async function consumirTresPasosDependendientes() {
    console.log('INICIO de ejecucion de multiples pasos - FLUJO ESTRUCTURADO DEPENDENTIENTE')
    try {
        const rdo1 = await paso1()
        console.log(rdo1)
        const rdo2 = await paso2()
        console.log(rdo2)
        const rdo3 = await paso3()
        console.log(rdo3)
    } catch(error) {
        console.log('Error encontrado: ', error)  
    }
    return console.log('FIN de ejecucion de multiples pasos - FLUJO ESTRUCTURADO DEPENDENTIENTE')
}
async function consumirTresPasosPromiseAll() {
    console.log('INICIO de ejecucion de multiples pasos - PAQUETE COMPLETO CON TODOS PROMISE ALL')
    try {
        const resultados = await Promise.all([paso1(), paso2(), paso3()])
        console.log(resultados)
    } catch(error) {
        console.log('Error encontrado: ', error)  
    }
    return console.log('FIN de ejecucion de multiples pasos - PAQUETE COMPLETO CON TODOS PROMISE ALL')
}
async function consumirTresPasosPromiseRace() {
    console.log('INICIO de ejecucion de multiples pasos - LA TAREA MÁS RAPIDA CON TODOS PROMISE RACE')
    try {
        const quicker = Promise.race([paso1(), paso2(), paso3()])
        console.log('La tarea más rápida ha sido: ', quicker )
    } catch(error) {
        console.log('Error encontrado: ', error)
    }
    return console.log('FIN de ejecucion de multiples pasos - LA TAREA MÁS RAPIDA CON TODOS PROMISE RACE')
}
consumirTresPasosDependendientes()
consumirTresPasosPromiseAll()
consumirTresPasosPromiseRace()