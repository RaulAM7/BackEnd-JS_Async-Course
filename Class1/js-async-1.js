// Clase 1.- Introducción a la Async en JS


// Diferencias entre codigo sincrono y asincrono


console.log('Esto es el inicio del codigo sincrono')
console.log('Hasta que no se ejecute esto no se ejecuta lo demás')
console.log('Este es el fin del código sincrono')


console.log('Esto es el inicio del codigo Asincrono')
setTimeout(() => {
    console.log('Asincronía - Esto se ejecuta tras 5000 segundos')
}, 5000)
setInterval(() => {
    console.log('Asincronía - Esto se ejecuta cada 500 segundos')
}, 500)
console.log('Este es el fin del código Asincrono')
