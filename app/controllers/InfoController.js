var Players = require('../models/Players')

var infoController = {
  index: function(req, res) {
    var player;
    var players = Players.getAll();


    for (var i = 0; i < players.length; i++) {
      if (players[i].id == req.params.id) {
        player = players[i];
        break;
      }
    }

    res.render('info', {
      title: 'Information',
      message: 'Information',
      image: player,
      active: {
        info: true
      }
    })
  }
}

module.exports = infoController;
