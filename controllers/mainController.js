'use strict'

export const home = (req, res) => {
  res.render('pages/index', {
    title: 'Home'
  })
}
