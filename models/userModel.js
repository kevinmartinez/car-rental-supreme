'use strict'
import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    trim: true
  },
  lastName: {
    type: String,
    trim: true
  }
})

let UsersModel = mongoose.model('User', UserSchema)

export default UsersModel
