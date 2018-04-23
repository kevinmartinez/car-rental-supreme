'use strict'
import mongoose from 'mongoose'
import { CarSchema } from '../models/carModel'

const Car = mongoose.model('Car', CarSchema)

// Add to db
const addNewCar = (req, res) => {
  let newCar = new Car(req.body)
  console.log(req.body)
  newCar.save((error, car) => {
    if (error) {
      res.send(error)
    }
    res.json(car)
  })
}

// Get from db
const getCar = (req, res) => {

}

export { addNewCar }
