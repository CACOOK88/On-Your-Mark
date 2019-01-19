// CREATE, READ, UPDATE, DELETE API REQUESTS TO THE RACES DB GO HERE

const db = require('../models')

module.exports = function(app) {
  app.get('/api/races', function(req, res) {
    db.Races.findAll({})
      .then(function(data) {
        res.json(data)
      })
  })

  app.get('/api/races/:category', function(req, res) {
    db.Races.findAll( {
      where: {
        category: req.params.category
      }
    })
  })
}