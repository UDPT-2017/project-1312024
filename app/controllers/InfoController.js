var Players = require('../models/Players')

var infoController = {
  index: function(req, res) {
    var player;
    var players = Players.getAll(function(err, players){
      for (var i = 0; i < players.length; i++) {
        if (players[i].id == req.params.id) {
          player = players[i];
          break;
        }
      }

      res.render('info/index', {
        title: 'Information',
        message: 'Information',
        image: player,
        active: { info: true },
        FormatDate: function formatDate(value) {
          var month = value.getMonth() + 1
          return value.getDate() + "/" + month + "/" + value.getFullYear();
        }
      });
    }
  );
  }
}

module.exports = infoController;
