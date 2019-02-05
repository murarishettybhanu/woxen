const comment = require("../database/models/userComments")

module.exports = async(req , res ) => {
    const comments = await userComment.find({status: 'Posted'});
    res.render("allComments",{
        comments
    })
}