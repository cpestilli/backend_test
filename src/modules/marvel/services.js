const marvelService = require('../../services/apiMarvel')
const axios = require('axios')
exports.list = async () => {
    try {
        const resp = await marvelService.findCharacters()
 
        for (const item of resp) {
            console.log('itens: ', item.comics.items)
            const comics = item.comics.items.map(el => 
                axios.get(`${el.resourceURI}?ts=1&apikey=c596422801d10a6543f84f32f897d120&hash=137a28c929ef9f78266e03fabef1b798`))
            item.comics.items = Promise.all(comics)
            console.log('item.comics.items: ', item.comics.items)
        }

        return resp
    } catch (err) {
        throw err.message
    }
}