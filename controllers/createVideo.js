const Video = require('../database/models/youtubevideo')

module.exports = (req, res) => {
  Video.create(req.body, (error, user) => {
    if (error) {
      return res.redirect('/auth/register')
    }
    res.redirect('/')
  })
}
