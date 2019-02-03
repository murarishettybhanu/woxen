const images = require('../database/models/images')
const path = require("path");


module.exports = (req ,res) => {
  const {image} = req.files
image.mv(path.resolve(__dirname, '..', 'public/image', image.name),(error) => {

    images.create({
      ...req.body,
      image: `/image/${image.name}`
    },(error ,doct) => {
      res.redirect('/dashbord')
    }
    )
    
  })

}