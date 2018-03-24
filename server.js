'use strict'

const express = require('express')
const routes = require('./routes/routes.index') // import routes
const sass = require('node-sass-middleware') // Express sass middleware
const path = require('path')
const reload = require('reload') // Live reload
const app = express()

// What is routes? a node module?
console.log(routes)

app.set('port', process.env.PORT || 3000)
app.set('view engine', 'ejs')

// Set app head title
app.locals.appTitle = 'Car Rental Supreme'
app.locals.currentYear = new Date().getFullYear()

// Sass middleware
app.use(sass({
  /* Options */
  src: 'scss',
  dest: path.join(__dirname, 'public/css'),
  debug: true,
  outputStyle: 'expanded',
  prefix: '/css' // Where prefix is at <link rel="stylesheets" href="prefix/style.css"/>
}))
// sass-middleware *before* `express.static`
app.use(express.static(path.join(__dirname, '/public')))

routes(app)

app.listen(app.get('port'))

// Live reload
reload(app, {verbose: true})
