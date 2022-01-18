const express = require("express");
const router = express.Router();
let controller = require("../controllers/productControllers")


router.get("/", controller.products)
router.get("/productCar", controller.productCar)
router.get("/productDetail", controller.productDetail)
router.get("/productCreate", controller.productCreate)
router.get("/:id",controller.show)
router.post("/productCreate",controller.save)


module.exports = router