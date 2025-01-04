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
//promiseTemp(5, 50).then((resultado) => {console.log(`Este es el resultado: ${resultado}`)}).catch((error) => {console.log(error)})



/* FEEDBACK Y MEJORAS:

    - Lo que está bien:
        -- Utilizaste correctamente setTimeout dentro de una promesa.
        -- Manejas tanto resolve como reject.
        -- Implementaste una función separada (consumirTemp) para consumir la promesa.
    
        - Mejoras sugeridas:
        -- Evitar parámetros innecesarios en la función consumirTemp. No necesitas recibir segs y variable si estos ya están manejados por promiseTemp.
        -- Usa una función de flecha para simplificar consumirTemp.

    promiseTemp(())

*/


/*
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
function getUser(id) {
    return new Promise((resolve, reject) => {
        console.log('Consultando API...')
        setTimeout(() => {
            const user = baseDeDatos.usuarios[id]
            user ? resolve(user) : reject('Usuario no encontrado')
        }, 2000);
    })
}
//getUser(1).then((user) => console.log(user)).catch((error) => console.log(error))






/* Ejercicio 3: Simulación de un sistema de autenticación
Crea una función autenticarUsuario que tome un nombre de usuario y contraseña, y devuelva una promesa que:

Resuelva si las credenciales son correctas (por ejemplo, usuario: admin, contraseña: 1234).
Rechace si las credenciales son incorrectas.
*/
function promiseAuth(name, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let auth = false
            name === 'admin' && password === 1234 ? resolve(auth=true) : reject(auth)
        }, 2000);
    })
}
function authentication(name, password){
    promiseAuth(name, password)
        .then(() => console.log('Usuario registrado con éxito'))
        .catch((error) => console.log('AUTH ERROR: ', error))
}
//authentication('admin', 1224)




/* Ejercicio 4: refactorizando Callbackas a Promesas
*/

function leerArchivo(callback) {
    console.log("Leyendo archivo...");
    setTimeout(() => {
      callback(null, "Contenido del archivo");
    }, 2000);
}
  
/*leerArchivo((error, contenido) => {
    if (error) {
      console.error("Error al leer el archivo:", error);
    } else {
      console.log("Archivo leído con éxito:", contenido);
    }
});*/

function promiseReadFile(content) {
    return new Promise((resolve, reject) => {
    console.log("Leyendo archivo...");
        setTimeout(() => {
            content ? resolve(content) : reject('Error leyendo el archivo')
        }, 2000);
    })
}

function readFile(content) {
    promiseReadFile(content)
        .then((content) => console.log("Archivo leído con éxito:", content))
        .catch((error) => console.error("Error al leer el archivo:", error))
}
//readFile('CONTENIDO DE PRUEBA')





/* Ejercicio 5: Manejo de errores en cadenas de promesas
Simula un flujo de pasos donde:

Cada paso es una promesa que puede fallar.
Si algún paso falla, el flujo debe detenerse y manejar el error.

*/

const paso1 = () => { return new Promise((resolve, reject) => {setTimeout(() => { let num = (Math.random()); num < 0.5 ? resolve(num) : reject('error') }, 1000); })}
const paso2 = () => { return new Promise((resolve, reject) => {setTimeout(() => { let num = (Math.random()); num < 0.5 ? resolve(num) : reject('error') }, 1000); })}
const paso3 = () => { return new Promise((resolve, reject) => {setTimeout(() => { let num = (Math.random()); num < 0.5 ? resolve(num) : reject('error') }, 1000); })}
const paso4 = () => { return new Promise((resolve, reject) => {setTimeout(() => { let num = (Math.random()); num < 0.5 ? resolve(num) : reject('error') }, 1000); })}
const paso5 = () => { return new Promise((resolve, reject) => {setTimeout(() => { let num = (Math.random()); num < 0.5 ? resolve(num) : reject('error') }, 1000); })}
const paso6 = () => { return new Promise((resolve, reject) => {setTimeout(() => { let num = (Math.random()); num < 0.5 ? resolve(num) : reject('error') }, 1000); })}





function ejercicio5() {
    paso1().then((resultado) => {console.log(resultado); paso2(resultado)}).catch((error) => console.log(error))
    paso2().then((resultado) => {console.log(resultado); paso3(resultado)}).catch((error) => console.log(error))
    paso3().then((resultado) => {console.log(resultado); paso4(resultado)}).catch((error) => console.log(error))
    paso4().then((resultado) => {console.log(resultado); paso5(resultado)}).catch((error) => console.log(error))
    paso4().then((resultado) => {console.log(resultado)}).catch((error) => console.log(error))
}
//ejercicio5()


function pasoAleatorio(iteration) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {  
            iteration += 1
            const num = (Math.random())
            num < 0.5 
                ? resolve({iteration, resultado:`Paso completado con valor ${num}`}) 
                : reject('Error en el paso')
        }, 1000);
    })

}

function ejercicio5Refactored() {
    let iteration = 0
    pasoAleatorio(iteration)
        .then(({ iteration, resultado }) => {
            console.log(`Iteración num: ${iteration} // Resultado: ${resultado}`);
            return pasoAleatorio(iteration)
        })
        .then(({ iteration, resultado }) => {
            console.log(`Iteración num: ${iteration} // Resultado: ${resultado}`);
            return pasoAleatorio(iteration)
        })
        .then(({ iteration, resultado }) => {
            console.log(`Iteración num: ${iteration} // Resultado: ${resultado}`);
            return pasoAleatorio(iteration)
        })
        .then(({ iteration, resultado }) => {
            console.log(`Iteración num: ${iteration} // Resultado: ${resultado}`);
            return pasoAleatorio(iteration)
        })
        .then(({ iteration, resultado }) => {
            console.log(`Iteración num: ${iteration} // Resultado: ${resultado}`);
            return pasoAleatorio(iteration)
        })
        .then(({ iteration, resultado }) => {
            console.log(`Iteración num: ${iteration} // Resultado: ${resultado}`);
            return pasoAleatorio(iteration)
        })
        .catch((error) => console.log('Error en el flujo', error))
}

ejercicio5Refactored()