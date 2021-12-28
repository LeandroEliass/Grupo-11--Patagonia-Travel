const express = require("express");
const router = express.Router()
let controller = require("../controllers/usersControllers")

router.get("/", controller.index)
router.get("/login", controller.login)
router.get("/register", controller.register)


module.exports = router