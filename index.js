const expressEdge = require("express-edge");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const expressSession = require("express-session");
const connectMongo = require("connect-mongo");
const connectFlash = require("connect-flash");

const homePageController = require("./controllers/homePage");
const createUserController = require("./controllers/createUser");
const storeUserController = require("./controllers/storeUser");
const loginController = require("./controllers/login");
const loginUserController = require("./controllers/loginUser");
const userdashbordController = require("./controllers/userdashbord");
const logoutController = require("./controllers/logout");
const storeCommentsController = require("./controllers/storeComments");
const acceptCommentController = require("./controllers/acceptComment");
const deleteCommentcontroller = require("./controllers/deleteComments");
const imageController = require("./controllers/image");
const uploadImageController = require("./controllers/uploadImage")
const deleteImageController = require("./controllers/deleteImage")
const allCommentsController = require("./controllers/allComments")
const profileController = require("./controllers/profile")
const updateController = require("./controllers/update")
const createyvideoController = require("./controllers/createVideo")
const youtubeVideoController = require("./controllers/youvideo")



const app = new express();
mongoose.connect('mongodb://localhost/woxenDataBase', { useNewUrlParser: true });
app.use(connectFlash());

const mongoStore = connectMongo(expressSession);

app.use(
  expressSession({
    secret: "secret",
    store: new mongoStore({
      mongooseConnection: mongoose.connection
    })
  })
);

app.use(fileUpload());
app.use(express.static("public"));
app.use(expressEdge);
app.set("views", `${__dirname}/views`);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const auth = require("./middleware/auth");

app.get("/", homePageController);
app.get("/login", loginController);
app.post("/users/login", loginUserController);
app.get("/registerWoxenUser", createUserController);
app.post("/users/register", storeUserController);
app.get("/dashbord",auth, userdashbordController);
app.get("/auth/logout", auth, logoutController);
app.post("/storeComments",storeCommentsController);
app.get("/acceptComment/:id",auth,acceptCommentController);
app.get("/deleteComment/:id",auth,deleteCommentcontroller);
app.get("/imageU",auth,imageController);
app.post("/uploadImage",auth,uploadImageController)
app.get("/deleteImage/:id",auth,deleteImageController)
app.get("/allComments",allCommentsController)
app.get("/profile",auth,profileController)
app.post("/update",auth,updateController)
app.post("/youvideo",auth,youtubeVideoController)
app.post("/cyouvideo",auth,createyvideoController)

app.listen(process.env.PORT || 80, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});