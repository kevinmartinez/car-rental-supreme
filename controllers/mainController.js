'use strict'

module.exports.home = (req, res) => {
  res.render('pages/index', {
    title: 'Home'
  })
}
