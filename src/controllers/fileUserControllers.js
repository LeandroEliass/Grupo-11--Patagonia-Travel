const file = require("../models/filesUser")
let fs = require("fs")

 const controller = {
    upload: (req,res) => res.render("files/upload",{
        styles: ["files/upload"],
    }),
    store: (req,res)=> res.send(req.files.map(f => file.create(f)))

 }

 module.exports= controller