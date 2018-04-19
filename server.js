import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import routes from './routes/carRoutes'

const app = express()
const port = 3030

// Create mongoose connection
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/car-rental-supreme')

// Set up body-parser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(express.static(('public')))

// Set up EJS as templating language
app.set('view engine', 'ejs')

// Set app title
app.locals.appTitle = 'Car Rental Supreme'
app.locals.currentYear = new Date().getFullYear()

// Run routes function from routes.index.js
routes(app)

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
})
