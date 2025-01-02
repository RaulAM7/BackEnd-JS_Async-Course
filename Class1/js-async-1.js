// Clase 1.- Introducción a la Async en JS


// Diferencias entre codigo sincrono y asincrono
console.log('Esto es el inicio del codigo sincrono')
console.log('Hasta que no se ejecute esto no se ejecuta lo demás')
console.log('Este es el fin del código sincrono')

console.log('Esto es el inicio del codigo Asincrono')
setTimeout(() => {
    console.log('Asincronía - Esto se ejecuta tras 5000 segundos')
}, 5000)
console.log('Este es el fin del código Asincrono')


// Event Loop

/*
    Elementos del Event Loop de JavaScript Async

        1.- Call Stack: donde se ejecuta el codigo principal
        2.- Web Apis: cuando se encuentra una async task se delega a las WebApis
        3.- Call Queue: cuando las WebApis terminan una async task la llevan a la Call Queue a esperar espacio en la Call Stack
        4.- Event Loop: conforme va habiendo espacio en la Call Stack el Event Loop va moviendo tasks de la Call Queue a la Call Stack

*/

// Ejemplo de Event Loop
console.log('Inicio')
setTimeout(() => {
    console.log('Async task')
}, 2000)
console.log('Fin')


/*
    1) Se ejecuta Inicio
    2) Se delega el console logc del timeout a las WebApis
    3) Se ejecuta Fin
    4) Al pasar 2 segundos la WebApis moverá el console log a la Call Queue
    5) Cuando la Call Stack se quede vacía el Event Loop moverá lo anterior a la Call Stack
    6) La Call Stack ejecutará el console log movido por desde la Call Queue
*/

// CALLBACKS

/*  
    Qué es un callback? -> Una funcion que se pasa como argumento a otra funcion y se ejecuta cuando la anterior termina su trabajo
*/

function saludar(nombre, callback){
    console.log(`Funcion principal, saludando a ${nombre}`)
    callback()
}
saludar('Juan', () => {console.log('Callback ejecutándose')})



// Ejercicios 

/*
Ejemplo con setTimeout:
Crea un programa que simule un temporizador que muestre mensajes como "Preparando...", "Casi listo...", y "¡Listo!" en intervalos de 2 segundos.
*/

function ejercicioUno()
{
    setTimeout(() => {
        console.log("Preparando...")
    }, 2000)
    setTimeout(() => {
        console.log("Casi Listo ...")
    }, 2000)
    setTimeout(() => {
        console.log('¡Listo!')
    }, 2000)
}
ejercicioUno()


function leerDatosAPI(callback)
{
    console.log('Consultando datos con la API...')

    setTimeout(() => {
        const datos = {usuario: 'Juan', edad: 30}
        callback(datos) // Aqui se ejecuta la callback pasada como argumento
    }, 3000)
}

leerDatosAPI(
    // Todo esto es la funcion callback, es una funcion anonima que recibe como argumento datos y ejecuta el consolelog
    (datos) => {
    console.log('Datos recibidos', datos)
})

