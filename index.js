const express = require('express')
const app = express()

require('./config')(app);

// start server
app.listen(3000, function() {
  console.log('FutBolr Profile app listening on port 3000!')
})
