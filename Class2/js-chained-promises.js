// Encadenamiento de promesas, util para cuando necesitas que varias operaciones async dependan entre sí


const paso1 = () => Promise.resolve('Paso 1 completado')
const paso2 = () => Promise.resolve('Paso 2 completado')
const paso3 = () => Promise.resolve('Paso 3 completado')

paso1()
    .then((resultado1) => {
        console.log(resultado1)
        return paso2()
    })
    .then((resultado2) => {
        console.log(resultado2)
        return paso3()
    })
    .then((resultado3) => {
        console.log(resultado3)
    })
    .catch((error) => {
        console.log('Error en la cadena de promesas: ', error)
    })



// Refactorizando Async Callbacks a Promises


function leerDatosAPI(callback)
{
    console.log('Consultando datos con la API...')
    setTimeout(() => {
        const datos = {name: 'Juan', age: 30}
        callback(datos)
    }, 3000);
}
leerDatosAPI(
    // Todo esto es el callback
    (datos) => {
        console.log('Estos son los datos:', datos)
    }
)