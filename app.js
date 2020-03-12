const express = require('express')
const app = express()
const compression = require('compression')
const helmet = require('helmet')
const bodyParser = require('body-parser')

const marvelModule = require('./src/modules/marvel/routes')

require('dotenv').config()

app.use(compression())
app.use(helmet())

app.use(bodyParser.urlencoded({ extended: false }))
 
app.use(bodyParser.json())
 
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.use(marvelModule.endpoint, marvelModule.router)

app.use((err, _, res, next) => res.json(err))
 
app.listen(process.env.PORT || 3000, () => console.log('app running port '))