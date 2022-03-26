const express = require("express");
const router = express.Router();
let controller = require("../controllers/productControllers")
const multer = require("multer");
const path= require("path");
const validation= require("../middlewares/validationsProduct");

const upload= multer({storage: multer.diskStorage({
    destination: (req,file,cb)=> cb(null, path.resolve(__dirname, "../../upload")),
    filename: (req,file,cb)=> cb(null,file.fieldname + "-"+ Date.now() + path.extname(file.originalname))
})});

router.get("/", controller.products)
router.get("/productCar", controller.productCar)
router.get("/productCreate", controller.productCreate)
router.get("/search", controller.search)

router.post("/productCreate",upload.any(),validation,controller.save)
router.get("/:id",controller.show)
router.get("/:id/edit",controller.edit)
router.put("/:id", controller.update)
router.delete("/delete/:id",controller.delet) 

module.exports = router