const User = require('../database/models/User')
const userComment = require('../database/models/userComments')
const userImage = require('../database/models/images')


module.exports = async (req, res) => {

  const users = await User.findById(req.session.userId);
  const custcmnts = await userComment.find({});
  const userImages = await userImage.find({});



  res.render("dashboard", {
    users,custcmnts,userImages
  });
}