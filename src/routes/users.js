const express = require("express");
const router = express.Router()
let controller = require("../controllers/usersControllers")
const multer = require("multer")
const path = require("path")
const validation = require("../middlewares/validations")
const {validate, validateCreate} = require("../models/users")
const access = require("../middlewares/access")
const auth = require("../middlewares/auth")
const guest = require("../middlewares/guest")


const upload= multer({storage: multer.diskStorage({
    destination: (req,file,cb)=> cb(null, path.resolve(__dirname, "../../public/image/users")),
    filename: (req,file,cb)=> cb(null,file.fieldname + "-"+ Date.now() + path.extname(file.originalname))
})});

router.get("/list",auth,controller.list)
router.get("/login",guest, controller.login)
router.get("/register",guest, controller.register)
router.get("/profile", access,controller.profile)
router.get("/edit/:id", access,controller.edit)
router.put("/:id/update",access, controller.update)
router.post("/new",upload.any(),validation, controller.save)

router.post("/access",[validate] ,controller.access) 
router.post("/logout", controller.logout)


module.exports = router