// Casos de uso para Async Wait básicos en node

const axios = require('axios')






async function getPokeData(name) {
    try {
        // AXIOS CONFIG - Add timeout and retry configuration
        const axiosConfig = {
            timeout: 5000, 
            retry: 3,
            retryDelay: 1000
        }
        // RETRIEVE DATA FROM API
        const pokeData = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${name}`,
            axiosConfig
        )
        // TRANSFORM DATA RETRIEVED
        console.log(`Los datos del pokemon ${name}, son: `)
        console.log({
            name: pokeData.data.name,
            id: pokeData.data.id,
            types: pokeData.data.types,
            abilities: pokeData.data.abilities
        })
        return pokeData
    } catch(error) {
        if (error.code === 'ETIMEDOUT') {
            console.error('Request timed out. Please check your internet connection.');
        } else if (error.code === 'ENETUNREACH') {
            console.error('Network is unreachable. Please check your internet connection.');
        } else if (error.response) {
            console.error(`API Error: ${error.response.status} - ${error.response.statusText}`);
        } else {
            console.error('Error fetching Pokemon data:', error.message);
        }
        throw error; // Re-throw to allow handling by caller if needed
    }    
}

getPokeData('ditto')