'use strict'

// Set up routes

module.exports = (app) => {
  app.get('/', (req, res) => res.render('pages/index'))

  app.get('/cars', (req, res) => res.render('pages/cars'))
}
