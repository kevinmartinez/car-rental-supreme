import express from 'express'
import routes from './routes/carRoutes'

const app = express()
const port = 3030

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
