const user = require("../models/users")
let controller ={
    index: (req,res)=> {res.render("index",
    {styles: ["index"] })
},
    
}

module.exports= controller