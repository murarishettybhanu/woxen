const comments = require('../database/models/userComments')
const path = require("path");


module.exports = (req ,res) => {

  const {image} = req.files
if(image){
image.mv(path.resolve(__dirname, '..', 'public/commentimages', image.name),(error) => {

    comments.create({
      ...req.body,
      image: `/commentimages/${image.name}`
    },(error ,doct) => {
      res.redirect('/')
    }
    )
    
  })
}
else{

  comments.create({
    ...req.body,
    image: `images/default.jpg`
  },(error ,doct) => {
    res.redirect('/')
  }
  )

}
}