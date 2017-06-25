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
      var pages = selectedPlayers.length / maxPlayeronPage;

      if (pages - Math.floor(pages) > 0) {
        pages = Math.floor(pages) + 1;
      }

      var pagesCount = [];
      for (var i = 0; i < pages; i++) {
        pagesCount.push(i + 1);
      }


      var onPagePlayers = [];
      if (currPageNo == undefined) {
        currPageNo = 1;
      }
      for (var i = 0; i < maxPlayeronPage; i++) {
        onPagePlayers.push(selectedPlayers[i + maxPlayeronPage * (currPageNo - 1)]);
        if (onPagePlayers[i] == null) {
          onPagePlayers.pop();
          break;
        }
      }
      res.render('players/index', {
        title: 'Players',
        message: 'Players',
        images: onPagePlayers,
        active: {
          players: true
        },
        isNoResults: selectedPlayers.length === 0,
        showPagination: pagesCount.length >= 2,
        pagesCount: pagesCount,
        searchStr: name
      });
    });
  },

  create: function(req, res) {
    res.render('players/create', {
      title: 'Create Player Profile',
      message: 'Create Player Profile',
      active: {
        players: true
      },
    });
  },

  created: function(req, res) {
    var name = req.body.name;
    var nat = req.body.nat;
    var dob = req.body.dob;
    var pob = req.body.pob;
    var height = req.body.height / 100;
    var caps = req.body.intcaps;
    var goals = req.body.intgoals;
    var pos = req.body.mainpos;
    var agent = req.body.agent;
    var value = req.body.value;
    var club = req.body.currclub;
    var pnumber = req.body.number;
    var url = req.body.url;

    var IsNotEmpty = function(string) {
      var result = string && string.trim() !== "" && string.length !== 0;
      return result;
    };

    // var queryStr = "INSERT INTO players(name, dob, pob, nationality, height, pos, agent, caps, goals, marketvalue, imgurl, club, pnumber)	VALUES (N'"+ name + "','" + dob + "', N'" + pob + "', N'" + nat +"'," + height +",'" + pos +"', N'" + agent + "'," + caps + "," + goals + " , " + value + ",'" + url+ "',N'" + club + "'," + pnumber +");";
    // console.log(queryStr);

    if (IsNotEmpty(name) && IsNotEmpty(nat) && IsNotEmpty(dob) && (height > 1)
    && IsNotEmpty(pos) && (value > 0) && IsNotEmpty(url)) {
      // Players.create({
      //   name : name,
      //   nat : nat,
      //   dob : dob,
      //   pob : pob,
      //   height : height,
      //   caps : caps,
      //   goals : goals,
      //   pos : pos,
      //   agent : agent,
      //   value : value,
      //   club : club,
      //   pnumber : pnumber,
      //   url : url,
      // },function(err) {
      //   if (err) {
          res.render('players/create', {
            title: 'Create Player Profile',
            message: 'Create Player Profile',
            successsMess: 'Profile created',
            active: {
              players: true
            }
          })
        // }
        // else{
    //       res.render('players/create', {
    //         title: 'Create Player Profile',
    //         message: 'Create Player Profile',
    //         errorMess: 'Database error',
    //         active: {
    //           players: true
    //         }
    //       });
    //     }
    //
    //   })
    }
    else {
      res.render('players/create', {
        title: 'Create Player Profile',
        message: 'Create Player Profile',
        errorMess: 'Your field cannot be empty',
        active: {
          players: true
        }
      });
    }
  }
}

module.exports = playersController;
