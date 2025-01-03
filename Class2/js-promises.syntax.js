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

miPromesa
    .then((a) => {console.log('Exito: ', a)})
    .catch((b) => {console.log('Error: ', b)})



