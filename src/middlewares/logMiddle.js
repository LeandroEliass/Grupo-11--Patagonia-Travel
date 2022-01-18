const fs = require("fs")

function logMiddle(req,res,next){
 fs.appendFileSync("log.txt", "se ingreso a "+ req.url);
 next();
}

module.exports= logMiddle