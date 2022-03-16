const userModel = require("../models/users")
const db = require("../database/models")

const user=(req, res, next) =>{
    res.locals.logged = false
    if(req.session.user && req.session){
        res.locals.logged = true
    }
    /* db.User.findOne({
        where:{
            email: req.cookies.user && req.cookies ? req.cookies.user : null,
        }})
    .then(users=>{
        let logeado = users;
   
    if(req.session && req.session.user ){
        logeado= req.session.user;
    }
    res.locals.user= logeado 
}) */
    next()

}
module.exports= user