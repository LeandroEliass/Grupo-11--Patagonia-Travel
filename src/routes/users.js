const express = require("express");
const router = express.Router()
let controller = require("../controllers/usersControllers")
const multer = require("multer")
const path = require("path")

const upload= multer({storage: multer.diskStorage({
    destination: (req,file,cb)=> cb(null, path.resolve(__dirname, "../../public/image/users")),
    filename: (req,file,cb)=> cb(null,file.fieldname + "-"+ Date.now() + path.extname(file.originalname))
})});

//router.get("/", controller.index)
router.get("/login", controller.login)
router.get("/register", controller.register)
router.post("/",[upload.any()],controller.save)


module.exports = router