const userComment = require('../database/models/userComments')

module.exports = (req , res ) => {


    userComment.findOneAndRemove({_id: req.params.id},
        function(error , User){

            if(error){
                res.render('/dashbord')
            }
            else {
                res.redirect('/dashbord')
            }
        }
        )


}