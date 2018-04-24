'use strict'
import User from '../models/userModel'

const addNewUser = async (req, res) => {
  let newUser = new User(req.body)
  try {
    await newUser.save()
    console.log('User saved')
    console.log(req.is('json'))
    res.redirect('/')
  } catch (err) {
    res.send(err.message)
  }
}

export { addNewUser }
