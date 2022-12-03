const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')

//INDEX
breads.get('/', (req, res) => {
  Bread.find()
    .then(foundBreads => {
      res.render('index', {
        breads: foundBreads,
        title: 'Index Page'
      }
      )
    })
 
})

// SHOW
breads.get('/:arrayIndex', (req, res) => {
  if (Bread[req.params.arrayIndex]) {
    res.render('Show', {
      bread: Bread[req.params.arrayIndex]
    })
  } else {
    res.send('404')
  }
})
module.exports = breads