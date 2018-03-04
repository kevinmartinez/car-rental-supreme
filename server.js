'use strict'

const express = require('express')
const port = process.env.PORT || 3000
const routes = require('./routes/index.js')
const sass = require('node-sass-middleware')
const path = require('path')
const app = express()

app.use(sass({
  /* Options */
  src: __dirname,
  dest: path.join(__dirname, 'public/css'),
  debug: true,
  outputStyle: 'compressed',
  prefix: '/prefix' // Where prefix is at <link rel="stylesheets" href="prefix/style.css"/>
}))
// Note: you must place sass-middleware *before* `express.static` or else it will
// not work.
// app.use('/public', express.static(path.join(__dirname, '/public')))

app.use('/public', express.static(process.cwd() + '/public'))
app.set('view engine', 'ejs')

routes(app)

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
