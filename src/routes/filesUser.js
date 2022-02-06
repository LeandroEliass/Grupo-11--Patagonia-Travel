/* const {Router} = require("express");
const router = Router();
const file = require("../controllers/fileUserControllers")
const path = require("path")
const multer = require("multer")

const upload= multer({storage: multer.diskStorage({
destination: (req,file,cb)=> cb(null, path.resolve(__dirname,"../../upload")) , 
filename:(req,file,cb) => cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname))
})}); 

router.get("/", file.upload)
router.post("/", [upload.any("file")],file.store)

module.exports = router */