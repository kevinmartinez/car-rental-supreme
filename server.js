'use strict'
import express from 'express'
import mongoose from 'mongoose'
import path from 'path'
import bodyParser from 'body-parser'
import routes from './routes/routes'

const app = express()
const port = 3030

// Create mongoose connection
mongoose.set('debug', true)
mongoose.connect('mongodb://localhost/car-rental-supreme')
mongoose.Promise = global.Promise
mongoose.connection.on('error', (err) => {
  console.log(err.message)
})
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))

// Takes the raw requests and turns them into usable properties on req.body
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Set app title
app.locals.appTitle = 'Car Rental Supreme'
app.locals.currentYear = new Date().getFullYear()

app.use('/', routes)
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
})
