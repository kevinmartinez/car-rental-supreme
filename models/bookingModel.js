'use strict'
import mongoose from 'mongoose'

const Schema = mongoose.Schema

const bookingSchema = new Schema({
  from: {
    type: Date,
    required: true
  },
  to: {
    type: Date,
    required: true
  }
})

export { bookingSchema }
