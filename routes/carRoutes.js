'use strict'
import { cars } from '../controllers/carController'

// Set up some end points, check if they work
const routes = (app) => {
  app.route('/cars')
    .get(cars)
    .post((req, res) => {
      res.send('POST request successfull!')
    })

  app.route('/cars/:carId')
    .put((req, res) => {
      res.send('PUT request successfull!')
    })
    .delete((req, res) => {
      res.send('DELETE request successfull!')
    })
}

export default routes
