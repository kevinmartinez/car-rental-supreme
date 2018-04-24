'use strict'
import mongoose from 'mongoose'

const CarSchema = new mongoose.Schema({
  brand: String,
  model: String,
  size: String,
  color: String,
  cost: Number,
  automatic: Boolean,
  manual: Boolean,
  roofRack: {
    type: Boolean,
    default: false
  },
  available: {
    type: Boolean,
    default: true
  }
})

let CarsModel = mongoose.model('Car', CarSchema)

export default CarsModel
