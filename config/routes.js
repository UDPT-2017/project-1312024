  var controllers = require('../app/controllers');
  var Router = require('express').Router;

  module.exports = function(app){
    var homeRoutes = Router()
      .get('/', controllers.home.index);

    var playersRoutes = Router()
      .get('/', controllers.players.index)
      .get('/create', controllers.players.create)
      .post('/create', controllers.players.created);

    var infoRoutes = Router()
      .get('/:id', controllers.info.index)
      .post('/:id', controllers.info.delete);

    app.use('/', homeRoutes);
    app.use('/players', playersRoutes);
    app.use('/info', infoRoutes);
  }
