const path = require('path')
const express = require('express')
const hbs = require('express-handlebars')

const cardsRoutes = require('./routes/cards.js')

/*
 * create the server
 *************************/

const server = express()
module.exports = server

/*
 * configure the server
 *************************/

const publicFolder = path.join(__dirname, 'public')
server.use(express.static(publicFolder))
server.use(express.urlencoded({ extended: false }))
server.use('/cards', cardsRoutes)

server.engine('hbs', hbs.engine({ extname: 'hbs' }))
server.set('view engine', 'hbs')

/*
 * define the routes
 *************************/

server.get('/', (req, res) => {
  // res.send('hellllloooo')
  res.render('start')
  // res.redirect('/')
})


const imagePath = path.relative(__dirname, 'images/hedgehog.jpg')

const testData = {
    id: 1,
    image: imagePath,
    name: 'train Station',
    selected: null,
}

server.get('/cards', (req, res) => {
    //check if last card
    const card = testData
    res.render('showCard', card)
})

server.post('/card/select', (req, res) => {
    //incriment index
    console.log(res.body)
    console.log('selected')
    res.redirect('/cards')
})

server.post('/card/not-select', (req, res) => {
    //incriment index
    console.log(req.body)
    console.log('not selceted')
    res.redirect('/cards')
})

