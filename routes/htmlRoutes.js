// GET REQESTS GO HERE FOR GRABBING PARTICULAR HTML FILES AND RES.SENDFILE

const path = require('path')

module.exports = function(app) {
  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/assets/index.html'))
  })

  app.get('/races', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/assets/races.html'))
  })
}