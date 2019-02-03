const comment = require("../database/models/userComments")

module.exports = async(req , res ) => {
    const comments = await comment.find({});
    res.render("allComments",{
        comments
    })
}