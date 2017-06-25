var pg = require('pg');
var connectionString = "postgres://user:123456@172.17.0.3:5432/user";


var Players = {
  getAll: function(callback) {
    var client = new pg.Client(connectionString);

    client.connect(function(err) {
      if (err) throw err;

      // setTimeout(function() {
      //
      // });
      // console.log(JSON.stringify(result));

      client.query("select * from players", function(err, result) {

        callback(err, result.rows);
        client.end();
      });
      // , 5000);

    });
  },
  // create: function(player, callback) {
  //       var client = new pg.Client(connectionString);
  //       client.query("INSERT INTO players(name, dob, pob, nationality, height, pos, agent, caps, goals, marketvalue, imgurl, club, pnumber)	VALUES (N'"+player.name+"','"+player.dob+"',N'"+player.pob+"',N'"+player.nat+"',"+player.height+",'"+player.pos+"',N'"+player.agent+"',"+player.caps+","+player.goals+","+player.value+",'"+player.url+"',N'"+player.club+"',"+player.pnumber+");",
  //       function(err,result) {
  //         callback(err);
  //     })
  //     }
  delete: function(id, callback) {
    var client = new pg.Client(connectionString);
    client.query("delete from players where id = " + id + ";", function(err, result) {
      callback(err);
    })
  }
}

module.exports = Players;
