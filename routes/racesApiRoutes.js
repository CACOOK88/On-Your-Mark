// CREATE, READ, UPDATE, DELETE API REQUESTS TO THE RACES DB GO HERE

const db = require('../models')

module.exports = function(app) {
  app.get('/api/races', function(req, res) {
    db.Race.findAll({})
      .then(function(data) {
        res.json(data)
      })
  })

  app.get('/api/races/:category', function(req, res) {
    db.Race.findAll( {
      where: {
        category: req.params.category
      }
    })
  })

  app.post('/api/races', function(req, res) {
    console.log(`inside races api routes`)
    console.log(req.body)
    db.Race.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      raceName: req.body.raceName,
      // category: req.body.category,
      street: req.body.street,
      city: req.body.city,
      state: req.body.state,
      zip: req.body.zip,
      phone: req.body.phone,
      email: req.body.email,
      url: req.body.url,
      raceLength: req.body.raceLength,
      description: req.body.description,
      participantCap: req.body.participantCap
    }).then(function(data) {
      console.log(data)
      res.json(data)
    }).catch(function(error) {
      res.json(error)
    })
  })
}