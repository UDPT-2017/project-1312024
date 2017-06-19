var Players = require('../models/Players.js')

var playersController = {
  index: function(req, res) {
    var name = req.query.name;
    var selectedPlayers = [];
    var players = Players.getAll();

    for (var i = 0; i < players.length; i++) {
      if (players[i].url.toLowerCase().search(name) !== -1) {
        selectedPlayers.push(players[i]);
      }
    }
    res.render('players', {
      title: 'Players',
      message: 'Players',
      images: selectedPlayers,
      active: {
        players: true
      },
      isNoResults: selectedPlayers.length === 0
    })
  }
}

module.exports = playersController;
