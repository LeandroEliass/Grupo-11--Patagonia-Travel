const express = require("express");
const router = express.Router();
let controller = require("../controllers/productControllers")
const multer = require("multer");
const path= require("path");

const upload= multer({storage: multer.diskStorage({
    destination: (req,file,cb)=> cb(null, path.resolve(__dirname, "../../upload")),
    filename: (req,file,cb)=> cb(null,file.fieldname + "-"+ Date.now() + path.extname(file.originalname))
})});

router.get("/", controller.products)
router.get("/productCar", controller.productCar)
router.get("/productCreate", controller.productCreate)
router.get("/:id",controller.show)
router.post("/productCreate",[upload.any()],controller.save)
router.get("/:id/edit",controller.update)
router.put("/:id", controller.modify)
router.delete("/",controller.delet) 
module.exports = router