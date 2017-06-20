const express = require('express')
const app = express()

module.exports = function(app){
  app.use(express.static('public'));
  app.use('/components', express.static('bower_components'));
}
