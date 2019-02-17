const mongoose = require('mongoose')

const userCommentsSchema = new mongoose.Schema({

    name: {

        type: String,

        required : true
        
    },
    msg: {

        type: String,

        required : true
        
    },
    finalrating: {

        type: String,
        
    },
    image: {

        type: String,
        
    },

    status: {

        type: String,
        
    },

    createdAt: {
        type: Date,
        default: new Date()
      }

})

const userComments = mongoose.model('userComments',userCommentsSchema )

module.exports = userComments