const User = require('../database/models/User')
const userComment = require('../database/models/userComments')
const image = require('../database/models/images')
const video = require('../database/models/youtubevideo')


module.exports = async (req, res) => {

  const users = await User.findById(req.session.userId);
  const custcmnts = await userComment.find({status: 'Posted'});
  const images = await image.find({});
  const vids = await video.find({});




  res.render("index-slider", {
    users,custcmnts,images,vids
  });
}