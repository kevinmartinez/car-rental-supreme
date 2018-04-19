'use strict'

import mongoose from 'mongoose'
import { CarSchema } from '../models/carModel'

const Car = mongoose.model('Car', CarSchema)

const addNewCar = (req, res) => {
  let newCar = new Car(req.body)
  newCar.save((error, car) => {
    if (error) {
      res.send(error)
    } else {
      res.json(car)
    }
  })
}

export { addNewCar }
