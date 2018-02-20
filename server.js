'use strict'

const express = require('express')
const port = process.env.PORT || 3000
const app = express()

app.use('/public', express.static(process.cwd() + '/public'))
app.set('view engine', 'ejs')

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
