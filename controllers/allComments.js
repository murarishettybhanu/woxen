const comment = require("../database/models/userComments")

module.exports = async(req , res ) => {
    const comments = await comment.find({status: 'Posted'});
    res.render("allComments",{
        comments
    })
}