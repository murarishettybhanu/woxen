const mongoose = require('mongoose')

const youvideoSchema = new mongoose.Schema({

    yvideo: {

        type: String,
        
    },

    name: {
        type:String,
    }

})

const youvideo = mongoose.model('youvideo',youvideoSchema )

module.exports = youvideo