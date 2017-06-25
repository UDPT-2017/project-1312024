const express = require('express')
const app = express()
var bodyParser = require('body-parser')

module.exports = function(app){
  app.use(bodyParser.urlencoded({
    extended: true
  }))
  app.use(express.static('public'));
  app.use('/components', express.static('bower_components'));
}
