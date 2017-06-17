const express = require('express')
const app = express()
var exphbs = require('express-handlebars')

app.use(express.static('public'))
app.use('/components', express.static('bower_components'))

app.engine('hbs', exphbs({
  extname: '.hbs',
  defaultLayout:'application'
  }
));
app.set('view engine', 'hbs');

app.get('/', function(req, res) {
  res.render('index', {
    title: 'Home',
    message: 'Home',
    active: {home: true}
  })
})

app.get('/players', function(req, res) {
  var images = [
    'images/thumb_25344_misc_general_500 (Ragnar Klavan).jpeg',
    'images/thumb_25348_misc_general_500 (Sadio Mane).jpeg',
    'images/thumb_25350_misc_general_500 (Lazar Markovic).jpeg',
    'images/thumb_25352_misc_general_500 (James Milner).jpeg',
    'images/thumb_25358_misc_general_500 (Mamadou Sakho).jpeg',
    'images/thumb_25360_misc_general_500 (Daniel Sturridge).jpeg',
    'images/thumb_25361_misc_general_500 (Georginio Wijnaldum).jpeg',
    'images/thumb_25397_misc_general_500 (Divock Origi).jpeg',
    'images/thumb_25634_misc_general_500 (Alberto Moreno).jpeg',
    'images/thumb_27270_misc_general_500 (Loris Karius).jpeg',
    'images/thumb_38406_misc_general_500 (Lucas Leiva).jpeg',
    'images/thumb_41053_misc_general_500 (Emre Can).jpeg',
    'images/thumb_41054_misc_general_500 (Nathaniel Clyne).jpeg',
    'images/thumb_41055_misc_general_500 (Philippe Coutinho).jpeg',
    'images/thumb_41057_misc_general_500 (Roberto Firmino).jpeg',
    'images/thumb_41059_misc_general_500 (Jordan Henderson).jpeg',
    'images/thumb_41060_misc_general_500 (Adam Lallana).jpeg',
    'images/thumb_41061_misc_general_500 (Dejan Lovren).jpeg',
    'images/thumb_41062_misc_general_500 (Joel Matip).jpeg',
    'images/thumb_41063_misc_general_500 (Simon Mignolet).jpeg',
    'images/thumb_25343_misc_general_500 (Danny Ings).jpeg'
  ]

  res.render('players', {
    title: 'Players',
    message: 'Players',
    images: images,
    active: {players: true}
  })
})

// start server
app.listen(3000, function() {
  console.log('Example app listening on port 3000!')
})
