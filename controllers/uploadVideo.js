const videos = require('../database/models/videos')
const path = require("path");
module.exports = (req ,res) => {

  const {video} = req.files
video.mv(path.resolve(__dirname, '..', 'public/videos', video.name),(error) => {

    videos.create({
      ...req.body,
      video: `/videos/${video.name}`
    },(error ,doct) => {
      res.redirect('/dashbord')
    }
    )
    
  })
}