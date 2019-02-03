const userImage = require('../database/models/images')

module.exports = (req , res ) => {


    userImage.findOneAndRemove({_id: req.params.id},
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