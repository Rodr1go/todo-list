const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const routes = require('./routes')

app.set('view engine', 'pug')
app.set('views', 'src/views')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true }))

app.use(express.static('src/public'))

app.use('/', routes)

app.listen(3000, function() {
  console.log('O servidor escutando na porta 3000.')
})

