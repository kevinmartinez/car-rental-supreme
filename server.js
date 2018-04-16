import express from 'express'
import data from './api/data.json'
import routes from './routes/routes.index' // import routes

const app = express()
const port = 3030

// app.set('port', process.env.PORT || 3000)
app.set('view engine', 'ejs')

// Set app head title
app.locals.appTitle = 'Car Rental Supreme'
app.locals.currentYear = new Date().getFullYear()

app.use(express.static(('public')))

routes(app)

app.listen(port, () => {
  console.log(`The server is running on port: ${port}`)
  console.log(typeof data[0].id)
})
