// Sintaxis basica de promises

// 1.- CREACION DE PROMESAS

const miPromesa = new Promise((resolve, reject) => {
    /*
        Esto es el cuerpo de una oepración asincronica

        Aqui lo sustituimos por esa variable true
    */
    const exito = true

    // Aqui definimos los resultados posibles de la promesa (resolve y reject)

    if (exito){
        resolve('Este es el valor retornado por la promesa si la operación asincronica tiene exito')
    } else {
        reject('Este es el valor retornado por la promesa si hay un error y no se puede ejecutar la operacion asincronica')
    }
})

// 2.- CONSUMO DE PROMESAS (llamada a la funcion asincronica conformada en forma de promesa)

function consumirMiPromesa() {
    miPromesa
        .then((a) => {console.log('Exito: ', a)})
        .catch((b) => {console.log('Error: ', b)})
}

// 3.- CREAR PROMESAS Resultas o Rechazadas directamente

const promesaResuelta = Promise.resolve('Promesa resuelta por defecto')

function consumirPromesaResuelta() {
    promesaResuelta
        .then((a) => {console.log('Exito: ', a)})
        .catch((b) => {console.log('Error: ', b)})
}
// consumirPromesaResuelta()


// 4.- ENCADENAMIENTO de promesas
const paso1 = () => Promise.resolve('Promesa resuleta por defecto 1') 
const paso2 = () => Promise.resolve('Promesa resuleta por defecto 2') 

function consumirPromesasResuletasChained() {    
    paso1()
        .then((resultado) => {
            console.log('Este es el resultado de la promesa 1: ', resultado)
            paso2(resultado)
        })
        .then((resultado) => {
            console.log('Este es el resultado de la promesa 2: ', resultado)
        })
        .catch((error) => {console.log('Error consumiendo promesas chained', error)})
}
// consumirPromesasResuletasChained()

// 5.- OPERACIONES CONCURRENTES CON Promise.all y Promise.race
const paso11 = () => Promise.resolve('Promesa resuleta por defecto 11')
const paso22 = () => Promise.resolve('Promesa resuleta por defecto 22')

function consumirAllPromesas11y22() {
    Promise.all([paso11(), paso22()])
        .then((resultados) => {
            console.log('Todas las operaciones completadas', resultados)
        })
        .catch((error) => {
            console.log('Alguna operación falló: ' , error)
        })
}
//consumirAllPromesas11y22()

const paso111 = () => new Promise((resolve) => {
    setTimeout(() => {
        resolve('Promesa resuelta por defecto111')
    }, 5000) 
})
const paso222 = () => new Promise((resolve) => {
    setTimeout(() => {
        resolve('Promesa resuelta por defecto222')
    }, 2000) 
})

function consumirPrimeraDe111y222() {
    Promise.race([paso111(), paso222()])
        .then((resultado) => { console.log('La primera promesa en resolverse es: ', resultado) } )
        .catch((error) => { console.log('Hubo algún error: ', error)})
}
consumirPrimeraDe111y222()