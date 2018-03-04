'use strict'

// Set up routes

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.render('index.ejs')
  })
}
