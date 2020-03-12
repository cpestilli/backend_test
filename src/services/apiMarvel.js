const axios = require('axios')
const auth = '?ts=1&apikey=c596422801d10a6543f84f32f897d120&hash=137a28c929ef9f78266e03fabef1b798'
module.exports.findCharacters = async () => {
        const resp = await axios.get(`http://gateway.marvel.com/v1/public/characters${auth}`)
        resp.data.data.results = JSON.parse(JSON.stringify(resp.data.data.results))
        return resp.data.data.results
}

module.exports.findComics = async (resourceURI) => {
    console.log('axios.get(`${resourceURI}${auth}`)Ç ', `${resourceURI}${auth}`)
    return axios.get(`${resourceURI}${auth}`)
}   1