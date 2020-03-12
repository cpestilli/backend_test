const express = require('express')

const { list } = require('./actions')

const router = express.Router()

router.get('/', list)

module.exports = { router, endpoint: '/marvel' }