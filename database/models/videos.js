const mongoose = require('mongoose')

const videoSchema = new mongoose.Schema({

    video: {

        type: String,
        
    }

})

const video = mongoose.model('video',videoSchema )

module.exports = video