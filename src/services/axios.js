const axios = require('axios');

const instance = axios.create({
    //baseURL: 'http://gateway.marvel.com/v1/public/characters?ts=1&apikey=c596422801d10a6543f84f32f897d120&hash=137a28c929ef9f78266e03fabef1b798',
    baseURL: 'http://gateway.marvel.com/v1/public',
    timeout: 10000,
    headers: {},
    query: {
        ts: 1,
        apikey: 'c596422801d10a6543f84f32f897d120',
        hash: '137a28c929ef9f78266e03fabef1b798'
    }
});

module.exports = instance