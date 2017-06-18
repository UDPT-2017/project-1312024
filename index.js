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

var images = [
  {id: 1, url: '/images/thumb_25344_misc_general_500 (Ragnar Klavan).jpeg'},
  {id: 2, url: '/images/thumb_25348_misc_general_500 (Sadio Mane).jpeg'},
  {id: 3, url: '/images/thumb_25350_misc_general_500 (Lazar Markovic).jpeg'},
  {id: 4, url: '/images/thumb_25352_misc_general_500 (James Milner).jpeg'},
  {id: 5, url: '/images/thumb_25358_misc_general_500 (Mamadou Sakho).jpeg'},
  {id: 6, url: '/images/thumb_25360_misc_general_500 (Daniel Sturridge).jpeg'},
  {id: 7, url: '/images/thumb_25361_misc_general_500 (Georginio Wijnaldum).jpeg'},
  {id: 8, url: '/images/thumb_25397_misc_general_500 (Divock Origi).jpeg'},
  {id: 9, url: '/images/thumb_25634_misc_general_500 (Alberto Moreno).jpeg'},
  {id: 10, url: '/images/thumb_27270_misc_general_500 (Loris Karius).jpeg'},
  {id: 11, url: '/images/thumb_38406_misc_general_500 (Lucas Leiva).jpeg'},
  {id: 12, url: '/images/thumb_41053_misc_general_500 (Emre Can).jpeg'},
  {id: 13, url: '/images/thumb_41054_misc_general_500 (Nathaniel Clyne).jpeg'},
  {id: 14, url: '/images/thumb_41055_misc_general_500 (Philippe Coutinho).jpeg'},
  {id: 15, url: '/images/thumb_41057_misc_general_500 (Roberto Firmino).jpeg'},
  {id: 16, url: '/images/thumb_41059_misc_general_500 (Jordan Henderson).jpeg'},
  {id: 17, url: '/images/thumb_41060_misc_general_500 (Adam Lallana).jpeg'},
  {id: 18, url: '/images/thumb_41061_misc_general_500 (Dejan Lovren).jpeg'},
  {id: 19, url: '/images/thumb_41062_misc_general_500 (Joel Matip).jpeg'},
  {id: 20, url: '/images/thumb_41063_misc_general_500 (Simon Mignolet).jpeg'},
  {id: 21, url: '/images/thumb_25343_misc_general_500 (Danny Ings).jpeg'}
];

app.get('/players', function(req, res) {
  res.render('players', {
    title: 'Players',
    message: 'Players',
    images: images,
    active: {players: true}
  })
})

app.get('/info/:id', function(req, res) {
    var image;

    for (var i = 0; i < images.length; i++) {
      if (images[i].id == req.params.id) {
        image = images[i];
        break;
      }
    }

  res.render('info', {title: 'Information',
    message: 'Information',
    image: image,
    active: {info: true}
  })
})

// start server
app.listen(3000, function() {
  console.log('Example app listening on port 3000!')
})
