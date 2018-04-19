'use strict'
import { addNewCar } from '../controllers/carController'

// Set up some end points, check if they work
const routes = (app) => {
  app.route('/cars')
    .get((req, res) => {
      res.send(`<h1>Cars</h1>`)
    })
    .post(addNewCar)
}

export default routes
