const { list } = require('./services')
const HttpStatus = require('http-status-codes')

module.exports.list = async (req, res, next) => {
    try {
        res.json(await list(req.query))
    } catch (error) {
        res.send(error)
        //next(error)
    }
}
