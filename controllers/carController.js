'use strict'
import Car from '../models/carModel'

// Add to db
export const addNewCar = async (req, res) => {
  let newCar = new Car(req.body)
  try {
    await newCar.save()
    console.log('New car saved')
  } catch (err) {
    res.send(err.message)
  }
}

// Get from db
export const getCars = async (req, res) => {
  // 1. Query the database for a list of all stores
  let cars
  try {
    cars = await Car.find()
  } catch (err) {
    res.send('Error')
  }
  res.render('pages/cars', {
    title: 'Our Cars',
    cars
  })
}
