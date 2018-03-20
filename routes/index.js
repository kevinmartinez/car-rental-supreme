'use strict'
const data = require('../data/cars.json')

// Set up routes

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.render('pages/index', {
      title: 'Home'
    })
  })

  app.get('/cars', (req, res) => {
    res.render('pages/cars', {
      title: 'Cars'
    })
  })

  app.get('/boo', (req, res) => {
    let cars = ''
    console.dir(data)
    // Loop through all cars
    data.cars.forEach((car) => {
      cars += `
        <h3>${car.brand}</h3>
        <h4>${car.name}</h4>
        <li>Color: <strong>${car.color}</strong></li>
        <li>Transmission: ${car.transmission}</li>`
    })
    console.dir(cars)
    res.send(`<div>${cars}</div>`)
    // res.send(`<h1>kevin's car is a ${data.cars[0].color} ${data.cars[0].brand.toUpperCase()} ${data.cars[0].year}</h1>`)
  })
}
