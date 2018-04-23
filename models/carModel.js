'use strict'
import mongoose from 'mongoose'

const Schema = mongoose.Schema
const CarSchema = new Schema({
  brand: {
    type: String
  },
  model: {
    type: String
  },
  year: {
    type: Number
  },
  size: {
    type: String
  },
  color: {
    type: String
  },
  cost: {
    type: Number
  },
  automatic: {
    type: Boolean
  },
  manual: {
    type: Boolean
  },
  roofRack: {
    type: Boolean,
    default: false
  },
  available: {
    type: Boolean,
    default: true
  }
})

export { CarSchema }
