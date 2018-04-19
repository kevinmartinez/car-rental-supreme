'use strict'

module.exports.cars = (req, res) => {
  res.render('pages/cars', {
    title: 'Cars'
  })
}
