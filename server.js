const express = require('express')
require('dotenv').config()
const PORT = process.env.PORT
const app = express()
const mongoose = require('mongoose')


// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
  )

app.get('/', (req, res) => {
    res.send('Welcome to an Awesome App about Breads!')
})
const breadsController = require('./controllers/breads_controllers.js')
app.use('/breads', breadsController)

// 404 Page
app.get('*', (req, res) => {
    res.send('404')
  })
  




app.listen(PORT, () => {
    console.log('listening on port', PORT);
})