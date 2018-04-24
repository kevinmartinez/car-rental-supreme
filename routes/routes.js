'use strict'
import express from 'express'
import { addNewUser } from '../controllers/userController'
import { home } from '../controllers/mainController'
// import { addNewCar, getCars } from '../controllers/carController'

const router = express.Router()

// Set up some end points, check if they work

router.get('/', home)
router.post('/', addNewUser)
// router.get('/cars', getCars)
// router.post('/addCar', addNewCar)

export default router
