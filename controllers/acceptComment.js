const comments = require('../database/models/userComments')


module.exports = (req, res) => {


    comments.findByIdAndUpdate({ _id: req.params.id },
            {
                status: 'Posted',
                


            },


            (error, user) => {
                if (error) {
                    res.render('/dashbord')
                }
                else {
                    res.redirect('/dashbord')

                }


            })
    }

