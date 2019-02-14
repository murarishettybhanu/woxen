const User = require('../database/models/User')
const userComment = require('../database/models/userComments')
const image = require('../database/models/images')


module.exports = async (req, res) => {

  const users = await User.findById(req.session.userId);
  const custcmnts = await userComment.find({status: 'Posted'});
  const images = await image.find({});




  res.render("index-slider", {
    users,custcmnts,images
  });
}