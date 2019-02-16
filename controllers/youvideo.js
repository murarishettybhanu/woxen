const video = require("../database/models/youtubevideo")

module.exports = (req , res) =>{
    const vid = req.body.yvideo
    video.findOneAndUpdate({name:"bhanu"},
        {
            yvideo: vid,

        }, 
       
        
        (error , v) =>{
            if(error)
            {
                res.redirect('/dashbord')
            }
            else{
                res.redirect('/dashbord')

            }
                        
            
        })
} 