const express = require('express')
const app = express()

app.use(express.static('public'))
app.use('/components', express.static('bower_components'))

app.get('/', function (req, res) {
  res.render('index.html')
})

// start server
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
