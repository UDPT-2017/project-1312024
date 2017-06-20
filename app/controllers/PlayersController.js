var Players = require('../models/Players.js')

var playersController = {
  index: function(req, res) {
    var currPageNo = req.query.pageNo;
    var name = req.query.name;
    var selectedPlayers = [];
    var players = Players.getAll(function(err, players) {

        for (var i = 0; i < players.length; i++) {
          if (players[i].name.toLowerCase().search(name) !== -1) {
            selectedPlayers.push(players[i]);
          }
        }
      var maxPlayeronPage = 18;
    var pages = selectedPlayers.length/maxPlayeronPage;

        if (pages-Math.floor(pages) > 0) {
          pages = Math.floor(pages) + 1;
        }

    var pagesCount = [];
        for (var i = 0; i < pages; i++) {
          pagesCount.push(i+1);
        }


    var onPagePlayers = [];
        if (currPageNo == undefined) {
          currPageNo = 1;
        }
        for (var i = 0; i < maxPlayeronPage; i++) {
          onPagePlayers.push(selectedPlayers[i+maxPlayeronPage*(currPageNo-1)]);
          if (onPagePlayers[i] == null) {
            onPagePlayers.pop();
            break;
          }
        }
        res.render('players/index', {
          title: 'Players',
          message: 'Players',
          images: onPagePlayers,
          active: { players: true},
          isNoResults: selectedPlayers.length === 0,
          showPagination: pagesCount.length >= 2,
          pagesCount: pagesCount,
          searchStr: name
        });
      });
    }
}

module.exports = playersController;
