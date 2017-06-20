  var controllers = require('../app/controllers');
  var Router = require('express').Router;

  module.exports = function(app){
    var homeRoutes = Router()
      .get('/', controllers.home.index);

    var playersRoutes = Router()
      .get('/', controllers.players.index);

    var infoRoutes = Router()
      .get('/:id', controllers.info.index);

    app.use('/', homeRoutes);
    app.use('/players', playersRoutes);
    app.use('/info', infoRoutes);
  }
