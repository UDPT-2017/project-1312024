const express = require('express')
const app = express()
var exphbs = require('express-handlebars')
var path = require('path')

module.exports = function(app){
  //middlewares

  app.use(express.static('public'));
  app.use('/components', express.static('bower_components'));

  app.engine('hbs', exphbs({
    extname: '.hbs',
    layoutsDir: path.resolve('./app/views/layouts'),
    partialsDir: path.resolve('./app/views/partials'),
    defaultLayout: 'application'
  }));
  app.set('view engine', 'hbs');
  app.set('views', path.resolve('./app/views'));

  //controllers
  var controllers = require('../app/controllers');

  //routes

  app.get('/', controllers.home.index);

  app.get('/players', controllers.players.index);

  app.get('/info/:id', controllers.info.index);
}
